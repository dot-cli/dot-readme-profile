const config = {
  silent: true,
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./test/setup.js'],
  transformIgnorePatterns: ['/dist/', '/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js']
}

module.exports = config
