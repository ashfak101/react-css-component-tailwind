'use server'

import fs from 'fs'
import path from 'path'

export async function getTsxFiles(dir: string): Promise<string[]> {
  let results: string[] = []
  // const directoryPath = path.resolve(__dirname, '../../../', dir)
  const directoryPath = path.resolve(process.cwd(), dir)
  const files = fs.readdirSync(directoryPath)

  for (let file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat && stat.isDirectory()) {
      results = results.concat(await getTsxFiles(filePath))
    } else if (path.extname(file) === '.tsx') {
      results.push(filePath)
    }
  }

  return results
}

export async function getTsxFilesNameOnly(dir: string): Promise<string[]> {
  const results = await getTsxFiles(dir)

  return results.map((file) =>
    file
      .replace('\\', '/')
      .replace('\\', '/')
      .replace('\\', '/')
      .replace('\\', '/')
      .replace('.tsx', '')
      .replace(dir + '/', '')
  )
}
