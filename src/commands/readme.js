const { Command } = require('@oclif/command')

class ReadmeCommand extends Command {
  async run() {
    this.log('README (coming soon)')
  }
}

ReadmeCommand.description = `Describe the command here
...
Extra documentation goes here
`

module.exports = ReadmeCommand
