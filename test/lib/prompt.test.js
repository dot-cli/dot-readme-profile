import { expect, test } from '@oclif/test'

import { keypress } from 'lib/prompt'

import { mockProcessExit } from './helper'

describe('keypress', () => {
  test
    .stdin('\n')
    .stdout()
    .it('keypress', async (ctx) => {
      const msg = 'Press Enter...'
      await keypress(msg)

      expect(ctx.stdout).to.equal(`${msg}\n`)
    })

  test
    .stub(process, 'exit', mockProcessExit())
    .stdin('\u0003')
    .stdout()
    .it('keypress exit', async (ctx) => {
      const msg = 'Press Enter or ^C to exit...'
      await keypress(msg)

      expect(process.exit.called).to.equal(true)
      expect(ctx.stdout).to.equal(`${msg}\n^C\n`)
    })
})
