// @ts-check
import { writeFile } from 'node:fs/promises'
import pkg from './package.json' with { type: 'json' }

export default async function run() {
  const content = (await import('./content.js')).default
  if (!('name' in content)) throw 'name missing from content'

  for (const key of ['name', 'description', 'about']) {
    content[key] = content[key].trim()
  }
  await writeFile('./src/content/content.json', JSON.stringify(content))

  const vars = ['VITE_NAME=' + content.name, 'VITE_VERSION=' + pkg.version]
  if (content.color) vars.push(`COLOR="${content.color}"`)
  await writeFile('./.env', vars.join('\n'))
}

run()
