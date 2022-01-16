import ghauth from 'ghauth'

// TODO Uses hooks instead of using ghauth to get the logged-in user or trigger login
// See https://oclif.io/docs/hooks
const login = async () => {
  return ghauth({ configName: 'dot' })
}

export default { login }
