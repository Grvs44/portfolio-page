import { writeFile } from 'node:fs/promises'

export default async function run() {
  const content = (await import('./content.js')).default
  for (const key of ['name', 'description', 'about']) {
    content[key] = content[key].trim()
  }
  await writeFile('./src/content/content.json', JSON.stringify(content))
  await writeFile('./.env', 'VITE_NAME=' + content.name)
}

run()
