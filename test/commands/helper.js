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
export const noReadmeUser = 'test_no_readme_user'

export const profile = {
  login: user,
  name: 'Test Name',
  firstName: 'Test'
}

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

export const mockKeyPress = () => sinon.stub(prompt, 'keypress')

export const mockLogin = () => sinon.stub(auth, 'login').returns({ user })

export const mockProfile = () => sinon.stub(auth, 'profile').returns(profile)

export const mockFetchReadme = () => {
  const stub = sinon.stub(readme, 'fetchReadme')

  // Setup stub for no readme user to return null
  stub.withArgs(noReadmeUser).returns(null)

  // Default stub
  stub.returns({
    url: `https://github.com/${user}`,
    readme: `Mock README for ${user}`
  })

  return stub
}

export const mockFetchReadmeToReturnReadmeOnSecondCall = () =>
  sinon
    .stub()
    .onFirstCall()
    .returns(null)
    .onSecondCall()
    .returns({
      url: `https://github.com/${user}`,
      readme: `Mock README for ${user}`
    })
