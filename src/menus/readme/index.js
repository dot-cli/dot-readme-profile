import prompt from 'lib/prompt'

export const choices = [
  { name: 'Open README in browser', value: 'open' },
  { name: 'Copy README to clipboard', value: 'copy' },
  { name: 'Show README', value: 'show' },
  { name: '<< Back', value: 'back' }
]

const readme = async ({ actions }) => {
  const action = await prompt.choice({ choices })
  if (action === 'back') {
    return
  }

  await actions[action]()
  await readme({ actions })
}

export default readme
