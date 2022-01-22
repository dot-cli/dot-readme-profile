import clipboard from 'clipboardy'

import { profile } from 'lib/auth'
import prompt from 'lib/prompt'
import { fetchReadme, generateReadme } from 'lib/readme'

import menus from 'menus'

import { default as readmeActions } from 'actions/readme'

const main = ({ user, token }) => {
  return {
    generate: async () => {
      const readme = generateReadme(await profile({ token }))
      clipboard.writeSync(readme)
      console.log('README copied to clipboard')
    },
    open: async () => {
      const readme = await fetchReadme(user)
      await menus.readme({ actions: readmeActions(readme) })
    },
    choose: async () => {
      const readmeUser = await prompt.question({
        message: 'which github user does the README belong to?'
      })
      if (readmeUser) {
        const readme = await fetchReadme(readmeUser)
        await menus.readme({ actions: readmeActions(readme) })
      }
    }
  }
}

export default main
