import axios from 'axios'
import ghauth from 'ghauth'
import Github from 'github-api'

import { readFile } from 'lib/file'

export const loggedInUser = {
  user: 'test_user',
  token: 'token',
  name: 'Test Name'
}

export const profile = {
  login: 'test',
  name: 'Test Name',
  firstName: 'Test',
  bio: 'Test bio',
  blog: 'https://test.org',
  twitter_username: 'test'
}

export const readmeWithTestProfile = readFile(
  __dirname,
  'templates/readmeWithTestProfile.md'
)

export const readmeWithEmptyProfile = readFile(
  __dirname,
  'templates/readmeWithEmptyProfile.md'
)

export const mockAuth = () => {
  ghauth.mockImplementation(() => loggedInUser)
}

export const mockAxios = (data) => {
  axios.get.mockResolvedValueOnce({ data })
}

export const mockGithubAPI = () => {
  const mockGetProfile = jest.fn().mockImplementation(() => ({
    data: profile
  }))
  const mockGetUser = jest
    .fn()
    .mockImplementation(() => ({ getProfile: mockGetProfile }))
  Github.mockImplementation(() => ({ getUser: mockGetUser }))
}
