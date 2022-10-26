import light from '~/plugins/vuetify/light'
// import dark from './dark'

export default {
  breakpoint: {
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920
    },
    //   scrollBarWidth: 16
    mobileBreakpoint: 768
  },
  theme: {
    options: {
      cspNonce: undefined,
      customProperties: true,
      minifyTheme (css) {
        return css.replace(/[\r\n|\r|\n]/g, '')
      },
      options: { variations: false }
    },
    dark: false,
    themes: {
      light,
      dark: light
    }
  }
}
