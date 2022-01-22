import { find } from 'linkifyjs'

const linkifyToMarkdown = (s) => {
  const matches = find(s)
  let offset = 0
  for (const match of matches) {
    const { value, start, end, href } = match

    // Linkify uses http for https so fix it
    // unless value explicity uses http
    const hrefWithHttpsFix = value.startsWith('http://')
      ? href
      : href.replace('http://', 'https://')

    const replacement = `[${value}](${hrefWithHttpsFix})`
    s =
      s.slice(0, start + offset) + replacement + s.slice(end + offset, s.length)

    offset += replacement.length - value.length
  }
  return s
}

export default { linkifyToMarkdown }
