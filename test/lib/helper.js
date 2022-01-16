import ghauth from 'ghauth'
import axios from 'axios'

export const loggedInUser = {
  user: 'test_user',
  token: 'token',
  name: 'Test Name'
}

export const mockAuth = () => {
  ghauth.mockImplementation(() => loggedInUser)
}

export const mockAxios = (data) => {
  axios.get.mockResolvedValueOnce({ data })
}
