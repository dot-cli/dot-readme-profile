import clipboard from 'clipboardy'
import { marked } from 'marked'
import TerminalRenderer from 'marked-terminal'

import { openUrl } from 'lib/url'

const readme = ({ readme, url }) => {
  return {
    open: async () => {
      await openUrl(url)
    },
    copy: async () => {
      clipboard.writeSync(readme)
      console.log('README copied to clipboard')
    },
    show: async () => {
      marked.setOptions({ renderer: new TerminalRenderer() })
      console.log(marked.parse(readme))
    }
  }
}

export default readme
