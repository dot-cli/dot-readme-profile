import prompt from 'lib/prompt'

import { fetchAndShowReadmeMenu, generateReadmeForUser } from './helper'

const main = ({ user, token }) => {
  return {
    generate: async () => {
      await generateReadmeForUser({ user, token })
    },
    open: async () => {
      await fetchAndShowReadmeMenu(user)
    },
    choose: async () => {
      const readmeUser = await prompt.question({
        message: 'which github user does the README belong to?'
      })
      if (readmeUser) {
        await fetchAndShowReadmeMenu(readmeUser)
      }
    }
  }
}

export default main
