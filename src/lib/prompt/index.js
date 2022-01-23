#!/usr/bin/env node
import inquirer from 'inquirer'

// see https://stackoverflow.com/a/49959557/610106
const keypress = async (msg) => {
  console.log(msg)
  process.stdin.setRawMode(true)
  process.stdin.resume()
  return new Promise((resolve) => {
    process.stdin.once('data', (data) => {
      const byteArray = [...data]
      if (byteArray.length > 0 && byteArray[0] === 3) {
        console.log('^C')
        process.exit() // eslint-disable-line no-process-exit
      }
      process.stdin.setRawMode(false)
      resolve()
    })
  })
}

const question = async ({ message = 'Type an answer' }) => {
  const response = await inquirer.prompt([
    {
      name: 'result',
      message
    }
  ])
  return response.result
}

const choice = async ({ choices, message = 'choose an option' }) => {
  console.log() // Line break
  const responses = await inquirer.prompt([
    {
      name: 'result',
      message,
      type: 'list',
      choices
    }
  ])
  return responses.result
}

export default { keypress, question, choice }
