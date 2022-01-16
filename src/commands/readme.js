import { Command } from '@oclif/command'

import { login } from 'lib/auth'

import actions from 'actions'
import menus from 'menus'

class ReadmeCommand extends Command {
  async run() {
    const { user } = await login()
    await menus.main({ user, actions: actions.main({ user }) })
  }
}

ReadmeCommand.description = 'README generator with superpowers ✨'

export default ReadmeCommand
