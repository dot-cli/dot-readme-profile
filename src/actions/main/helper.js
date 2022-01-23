import clipboard from 'clipboardy'

import { profile } from 'lib/auth'
import prompt from 'lib/prompt'
import { fetchReadme, generateReadme } from 'lib/readme'
import { openUrl } from 'lib/url'

import menus from 'menus'

import { default as readmeActions } from 'actions/readme'

export const githubReadmeInstructionsUrl =
  'https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme#adding-a-profile-readme'

export const fetchAndShowReadmeMenu = async (user) => {
  const readme = await fetchReadme(user)
  if (!readme) {
    console.log(`README not found for ${user}`)
    return
  }
  await menus.readme({ actions: readmeActions(readme) })
}

export const checkGithubReadmeExists = async (user) => {
  const currentReadme = await fetchReadme(user)
  if (!currentReadme) {
    console.log('Please add a Github profile README first')
    await prompt.keypress(
      'Press Enter to open the instructions in your browser...'
    )

    await openUrl(githubReadmeInstructionsUrl)

    await prompt.keypress('\nNow Press Enter to generate your README...')

    // Try again to see if Github readme now exists
    await checkGithubReadmeExists(user)
  }
}

export const generateReadmeForUser = async ({ user, token }) => {
  await checkGithubReadmeExists(user)

  const readme = generateReadme(await profile({ token }))
  clipboard.writeSync(readme)

  console.log('README generated & copied to clipboard')
  await prompt.keypress(
    'Press Enter to open github.com & paste the README in your browser...'
  )

  await openUrl(`https://github.com/${user}/${user}/edit/main/README.md`)
}
