import { Command } from '@oclif/core'

import { login } from 'lib/auth'

import menus from 'menus'

import actions from 'actions'

class ReadmeCommand extends Command {
  async run() {
    const { user, token } = await login()
    await menus.main({ user, actions: actions.main({ user, token }) })
  }
}

ReadmeCommand.description = 'README generator with superpowers ✨'

export default ReadmeCommand
