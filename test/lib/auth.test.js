import auth from 'lib/auth'

import { profile, loggedInUser, mockAuth, mockGithubAPI } from './helper'

describe('auth', () => {
  test('login', async () => {
    mockAuth()

    expect(await auth.login()).toStrictEqual(loggedInUser)
  })

  test('profile', async () => {
    mockGithubAPI()

    const { token } = loggedInUser
    expect(await auth.profile({ token })).toStrictEqual(profile)
  })
})
