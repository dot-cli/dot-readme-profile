import { linkifyToMarkdown } from 'lib/linkify'

describe('linkify', () => {
  test('linkifyMarkdown', () => {
    const s = 'Any links to github.com here? If not, contact test@example.com'
    const linkified =
      'Any links to [github.com](https://github.com) here? If not, contact [test@example.com](mailto:test@example.com)'
    expect(linkifyToMarkdown(s)).toEqual(linkified)
  })
})
