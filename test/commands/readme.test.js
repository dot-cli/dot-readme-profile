import { expect, test } from '@oclif/test'
import inquirer from 'inquirer'

import cmd from 'commands/readme'

import auth from 'lib/auth'
import readme from 'lib/readme'

import {
  user,
  chosenUser,
  noReadmeUser,
  mainChoices,
  readmeChoices,
  spyPromptChoice,
  spyClipboard,
  spyOpenUrl,
  mockPrompts,
  mockKeyPress,
  mockLogin,
  mockProfile,
  mockFetchReadme,
  mockFetchReadmeToReturnReadmeOnSecondCall
} from './helper'

describe('readme', () => {
  beforeEach(() => {
    mockLogin()
    mockProfile()
    mockFetchReadme()
    mockKeyPress()
  })

  test
    .stub(inquirer, 'prompt', mockPrompts(['exit']))
    .it('runs & exits readme', async () => {
      const spy = spyPromptChoice()

      await cmd.run([])

      expect(auth.login.called).to.equal(true)
      expect(inquirer.prompt.called).to.equal(true)
      expect(spy.calledWith(mainChoices)).to.equal(true)
    })

  test
    .stdout()
    .stub(inquirer, 'prompt', mockPrompts(['generate', 'exit']))
    .it('generate readme', async (ctx) => {
      await cmd.run([])

      expect(ctx.stdout).to.contain('README generated & copied to clipboard')
    })

  test
    .stdout()
    .stub(readme, 'fetchReadme', mockFetchReadmeToReturnReadmeOnSecondCall())
    .stub(inquirer, 'prompt', mockPrompts(['generate', 'exit']))
    .it('generate readme', async (ctx) => {
      await cmd.run([])

      expect(ctx.stdout).to.contain('Please add a Github profile README first')
      expect(ctx.stdout).to.contain('README generated & copied to clipboard')
    })

  test
    .stub(inquirer, 'prompt', mockPrompts(['open', 'back', 'exit']))
    .it('opens readme options', async () => {
      const spy = spyPromptChoice()

      await cmd.run([])

      expect(readme.fetchReadme.calledWith(user)).to.equal(true)
      expect(spy.calledWith(readmeChoices)).to.equal(true)
    })

  test
    .stub(
      inquirer,
      'prompt',
      mockPrompts(['choose', chosenUser, 'back', 'exit'])
    )
    .it('choose readme', async () => {
      const spy = spyPromptChoice()

      await cmd.run([])

      expect(readme.fetchReadme.calledWith(chosenUser)).to.equal(true)
      expect(spy.calledWith(readmeChoices)).to.equal(true)
    })

  test
    .stub(inquirer, 'prompt', mockPrompts(['choose', noReadmeUser, 'exit']))
    .stdout()
    .it('choose not found readme', async (ctx) => {
      await cmd.run([])

      expect(readme.fetchReadme.calledWith(noReadmeUser)).to.equal(true)
      expect(ctx.stdout).to.contain(`README not found for ${noReadmeUser}`)
    })

  test
    .stub(inquirer, 'prompt', mockPrompts(['open', 'open', 'back', 'exit']))
    .it('opens readme URL', async () => {
      const spy = spyOpenUrl()

      await cmd.run([])

      const githubUrl = `https://github.com/${user}`
      expect(spy.calledWith(githubUrl)).to.equal(true)
    })

  test
    .stdout()
    .stub(inquirer, 'prompt', mockPrompts(['open', 'copy', 'back', 'exit']))
    .it('copies readme to clipboard', async (ctx) => {
      const spy = spyClipboard()

      await cmd.run([])

      expect(spy.called).to.equal(true)
      expect(ctx.stdout).to.contain('README copied to clipboard')
    })

  test
    .stdout()
    .stub(inquirer, 'prompt', mockPrompts(['open', 'show', 'back', 'exit']))
    .it('show readme', async (ctx) => {
      await cmd.run([])

      expect(ctx.stdout).to.contain(`Mock README for ${user}`)
    })
})
