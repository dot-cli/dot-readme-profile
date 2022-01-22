import sinon from 'sinon'

jest.mock('open')
jest.mock('ghauth')
jest.mock('axios')
jest.mock('github-api')

afterEach(() => {
  jest.restoreAllMocks()
  sinon.restore()
})
