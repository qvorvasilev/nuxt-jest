import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  ssr: false,

  target: 'static',

  server: {
    port: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'nuxt-jest: %s',
    title: 'nuxt-jest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt-jest' },
      { hid: 'og:title', property: 'og:title', content: 'nuxt-jest' },
      { hid: 'og:description', property: 'og:description', content: 'nuxt-jest.' },
      { hid: 'og:image', property: 'og:image', content: '/android-chrome-512x512.png' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: 'th8DLKMlJXOejcI2d5RDvELb0yAzD-9R706HWxHRTzY' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      { type: 'text/javascript', src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAcg8c-4ynzTQufQW4tkBdrPsOuXCLuIEU&libraries=places' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // https://nuxtjs.org/docs/directory-structure/static#static-asset-prefix
  static: {
    prefix: false
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/validate.ts',
    // '~/plugins/notification.ts',
    // '~/plugins/alerts.ts',
    // '~/plugins/phone-number.ts',
    // '~/plugins/vue-mask.ts',
    // '~/plugins/scroll-active.ts',
    // '~/plugins/vue-youtube',
    // '~/plugins/swiper.ts',
    '~/plugins/auth.ts',
    '~/plugins/axios',
    '~/plugins/utils.ts',
    '~/plugins/vue-tel-input.ts'
  ],

  // https://nuxtjs.org/guide/runtime-config
  publicRuntimeConfig: {
    everything: process.env, // Do not remove,
    env: process.env.NODE_ENV, // Do not remove,
    baseURL: process.env.API_BASE_URL, // Do not remove,
    isDevEnv: process.env.NODE_ENV === 'development', // Do not remove,
    isDemoEnv: process.env.NODE_ENV === 'demo', // Do not remove,
    isProdEnv: process.env.NODE_ENV === 'production', // Do not remove,
    site_url: process.env.SITE_URL
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/other', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    [
      'svg-to-vue-component/nuxt',
      {
        test: /\.svg$/,
        use: [
          'vue-loader',
          {
            loader: 'svg-to-vue-component/loader',
            options: {
              svgoConfig: false
            }
          }
        ]
      }
    ]
    // '@nuxtjs/device'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/nuxt-community/redirect-module
    // '@nuxtjs/redirect-module',
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'cookie-universal-nuxt'
  ],

  redirect: [
    // { from: '^/blog/(.*)$', to: '/learn/$1', statusCode: 301 }
  ],

  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      },
      {
        name: 'Bulgarian',
        code: 'bg',
        iso: 'bg',
        file: 'bg.js'
      }
      // {
      //   name: 'Romanian',
      //   code: 'ro',
      //   iso: 'ro',
      //   file: 'ro.js'
      // }
    ],
    strategy: 'prefix_except_default',
    langDir: 'lang/',
    // defaultLocale: 'bg',
    vueI18n: {
      fallbackLocale: 'en',
      silentTranslationWarn: true, // set false to show not translated phrasesses
      silentFallbackWarn: true // set false to show not translated phrasesses
    },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    lazy: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
    baseURL:
      // process.env.API_BASE_URL ? process.env.API_BASE_URL + '/v1/' : 'http://192.168.0.241:10031/v1/'
      process.env.API_BASE_URL ? process.env.API_BASE_URL + '/v1/' : 'http://213.91.236.80:10031/v1/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'nuxt-jest',
      display: 'standalone',
      background_color: '#E2E3E8'
    },
    meta: {
      theme_color: '#E2E3E8'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: [],
    treeShake: true,
    optionsPath: '~/plugins/vuetify/vuetify.options.js'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config: any) {
      config.module.rules.push({
        test: /\.(mov|ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}

export default config
