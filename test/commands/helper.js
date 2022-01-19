import clipboard from 'clipboardy'
import sinon from 'sinon'

import auth from 'lib/auth'
import prompt from 'lib/prompt'
import readme from 'lib/readme'
import url from 'lib/url'

import { choices as menuMainChoices } from 'menus/main'
import { choices as menuReadmeChoices } from 'menus/readme'

export const user = 'test_user'
export const chosenUser = 'test_chosen_user'
export const mainChoices = { choices: menuMainChoices(user) }
export const readmeChoices = { choices: menuReadmeChoices }

export const spyPromptChoice = () => {
  return sinon.spy(prompt, 'choice')
}

export const spyClipboard = () => {
  return sinon.spy(clipboard, 'writeSync')
}

export const spyOpenUrl = () => {
  return sinon.spy(url, 'openUrl')
}

export const mockPrompts = (results) => {
  const stub = sinon.stub()
  for (const [index, result] of results.entries()) {
    stub.onCall(index).resolves({ result })
  }
  return stub
}

export const mockLogin = () => sinon.stub(auth, 'login').returns({ user })

export const mockFetchReadme = () =>
  sinon.stub(readme, 'fetchReadme').returns({
    url: `https://github.com/${user}`,
    readme: `Mock README for ${user}`
  })
