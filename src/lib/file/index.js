import fs from 'fs'
import path from 'path'

export const readFile = (fileDir, filePath) => {
  return fs.readFileSync(path.resolve(fileDir, filePath), 'utf8').trim()
}
