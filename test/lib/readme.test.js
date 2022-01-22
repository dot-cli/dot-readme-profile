import axios from 'axios'

import readme from 'lib/readme'

import {
  profile,
  loggedInUser,
  readmeWithTestProfile,
  readmeWithEmptyProfile,
  mockAxios
} from './helper'

const { user } = loggedInUser
const readmeText = 'Test Readme'

describe('readme', () => {
  test('fetchReadme', async () => {
    mockAxios(readmeText)

    expect(await readme.fetchReadme(user)).toStrictEqual({
      url: `https://github.com/${user}`,
      readme: readmeText
    })

    expect(axios.get).toHaveBeenCalledWith(
      `https://raw.githubusercontent.com/${user}/${user}/master/README.md`
    )
  })

  test('generateReadme', async () => {
    expect(await readme.generateReadme(profile)).toEqual(readmeWithTestProfile)
    expect(await readme.generateReadme({ login: profile.login })).toEqual(
      readmeWithEmptyProfile
    )
  })
})
