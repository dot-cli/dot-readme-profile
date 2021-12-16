const { expect, test } = require('@oclif/test')

describe('readme', () => {
  test
    .stdout()
    .command(['readme'])
    .it('runs readme', (ctx) => {
      expect(ctx.stdout).to.contain('README')
    })
})
