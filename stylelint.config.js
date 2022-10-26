module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  options: {
    fix: true
  },
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['deep', ':deep', 'v-deep']
      }
    ],

    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each']
      }
    ]
  }
}
