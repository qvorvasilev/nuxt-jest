module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    'lines-between-class-members': ['error', 'always'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/html-comment-content-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/block-spacing': ['error', 'always'],
    'vue/no-side-effects-in-computed-properties': ['error'],
    'max-lines-per-function': [
      'error',
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.vue'],
      rules: {
        'no-use-before-define': 'off',
        'import/no-named-as-default': 'off',
        '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
        '@typescript-eslint/no-unused-vars': ['error', { args: 'after-used' }],
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
}
