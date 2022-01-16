import open from 'open'

const openUrl = async (url) => {
  await open(url)
}

export default { openUrl }
