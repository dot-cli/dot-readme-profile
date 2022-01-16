import inquirer from 'inquirer'

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

export default { question, choice }
