import auth from 'lib/auth'

import { loggedInUser, mockAuth } from './helper'

describe('auth', () => {
  test('login', async () => {
    mockAuth()

    expect(await auth.login()).toStrictEqual(loggedInUser)
  })
})
