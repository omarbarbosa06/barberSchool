import { access, readFile } from 'node:fs/promises'
import { constants } from 'node:fs'

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')

if (html.includes('/src/main.jsx')) {
  throw new Error('dist/index.html still references Vite source code instead of compiled assets')
}

const assetUrls = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((url) => !url.startsWith('#') && !url.startsWith('http'))

if (!assetUrls.length) {
  throw new Error('No built asset URLs were found in dist/index.html')
}

for (const assetUrl of assetUrls) {
  if (assetUrl.startsWith('/')) {
    throw new Error(`Root-absolute asset URL will break on project Pages: ${assetUrl}`)
  }

  const relativePath = assetUrl.replace(/^\.\//, '')
  await access(new URL(`../dist/${relativePath}`, import.meta.url), constants.R_OK)
}

console.log(`GitHub Pages artifact is valid (${assetUrls.length} compiled assets checked).`)
