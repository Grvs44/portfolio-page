// @ts-check
import { writeFile } from 'node:fs/promises'
import pkg from '../package.json' with { type: 'json' }

export default async function run() {
  const content = (await import('../content.js')).default
  if (!('name' in content)) throw 'name missing from content'
  if (!('icon' in content)) throw 'icon missing from content'
  if (!('locale' in content)) throw 'locale missing from content'

  for (const key of ['name', 'description', 'about']) {
    content[key] = content[key].trim()
  }

  const { icon, locale, ...writeContent } = content
  // @ts-ignore
  if (!('src' in icon)) throw 'src missing from icon'
  if (!('type' in icon)) throw 'type missing from icon'
  if (!('sizes' in icon)) throw 'sizes missing from icon'

  const date = new Date().toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  await writeFile(
    './src/content.ts',
    'export default ' + JSON.stringify(writeContent),
  )

  const vars = [
    'VITE_LAST_UPDATED=' + date,
    'VITE_LANG=' + locale,
    'VITE_NAME=' + content.name,
    'VITE_VERSION=' + pkg.version,
    'VITE_ICON_SRC=' + icon.src,
    'ICON_TYPE=' + icon.type,
    'ICON_SIZES=' + icon.sizes,
  ]
  if (content.color) vars.push(`COLOR="${content.color}"`)
  await writeFile('./.env', vars.join('\n'))
}

run().catch(console.error)
