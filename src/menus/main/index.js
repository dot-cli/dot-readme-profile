import prompt from 'lib/prompt'

export const choices = (user) => [
  { name: 'Generate README', value: 'generate' },
  { name: `README options for ${user}`, value: 'open' },
  { name: 'Choose README', value: 'choose' },
  { name: 'Exit', value: 'exit' }
]

const main = async ({ user, actions }) => {
  const action = await prompt.choice({ choices: choices(user) })
  if (action === 'exit') {
    return
  }

  await actions[action]()
  await main({ user, actions })
}

export default main
