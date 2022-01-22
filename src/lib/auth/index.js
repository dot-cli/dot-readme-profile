import ghauth from 'ghauth'
import Github from 'github-api'

// TODO Uses hooks instead of using ghauth to get the logged-in user or trigger login
// See https://oclif.io/docs/hooks
const login = async () => {
  return ghauth({ configName: 'dot' })
}

async function profile({ token }) {
  const gh = new Github({ token })
  const { data: profile } = await gh.getUser().getProfile()
  profile.firstName = profile.name.split(' ')[0]
  return profile
}

export default { login, profile }
