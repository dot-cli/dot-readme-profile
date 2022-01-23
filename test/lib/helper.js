import axios from 'axios'
import ghauth from 'ghauth'
import Github from 'github-api'
import sinon from 'sinon'

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

export const mockGetUrl = (response) => {
  axios.get.mockResolvedValueOnce(response)
}

export const mockNotFoundUrl = () => {
  axios.get.mockRejectedValue({ response: { status: 404 } })
}

export const mockFailedUrl = () => {
  axios.get.mockRejectedValue({ response: { status: 500 } })
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

export const mockProcessExit = () => {
  return sinon.stub(process, 'exit')
}
