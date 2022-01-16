import axios from 'axios'

// TODO Used below in parseLinks that is commented out but kept for future reference
// import { Remarkable } from 'remarkable'

const fetchReadme = async (user) => {
  const readmeURL = `https://raw.githubusercontent.com/${user}/${user}/master/README.md`
  const response = await axios.get(readmeURL)
  return {
    url: `https://github.com/${user}`,
    readme: response.data
  }
}

// TODO Unused but keeping for future reference
/*
const parseLinks = (readme) => {
  const md = new Remarkable()
  const tokens = md.parse(readme, {})

  const links = []

  let currentLink = null
  let currentLinkTitle = null
  let isLinkOpen = false

  for (const token of tokens) {
    if (token.type !== 'inline') return
    if (!Array.isArray(token.children)) return
    for (const child of token.children) {
      if (child.type === 'link_open') {
        isLinkOpen = true
        currentLink = child.href
      } else if (child.type === 'link_close') {
        isLinkOpen = false
        if (currentLink) {
          links.push({ href: currentLink, title: currentLinkTitle })
        }

        currentLinkTitle = null
      } else if (isLinkOpen && child.type === 'image') {
        currentLinkTitle = child.alt
      } else if (isLinkOpen && child.type === 'text') {
        if (child.content.startsWith('<img')) {
          const regex = 'alt=[\\"\'](.*?)[\\"\']'
          const altMatch = child.content.match(regex)
          if (altMatch) {
            currentLinkTitle = altMatch[1]
          }
        } else {
          currentLinkTitle = child.content
        }
      }
    }
  }

  return links
}
*/

export default { fetchReadme }
