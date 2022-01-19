import { fetchReadme } from 'lib/readme'
import prompt from 'lib/prompt'

import { default as readmeActions } from 'actions/readme'
import menus from 'menus'

const main = ({ user }) => {
  return {
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
