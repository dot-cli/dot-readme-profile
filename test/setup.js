import sinon from 'sinon'

jest.mock('open')
jest.mock('ghauth')
jest.mock('axios')

afterEach(() => {
  jest.restoreAllMocks()
  sinon.restore()
})
