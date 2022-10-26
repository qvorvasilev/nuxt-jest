module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue'
    // '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
    // '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    // '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  verbose: true,
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue'
  ],
  testRegex: '/__tests__/.*\\.(ts|tsx|js)$',
  mapCoverage: true,
  // collectCoverage: true,
  // coverageReporters: ['json', 'html'],
  moduleDirectories: [
    'node_modules',
    './'
  ]
}
