import { Plugin } from '@nuxt/types'

type AuthPayload = {
    Token: string,
    RefreshToken: string
}

type IAuth = {
    isLoggedIn(): boolean,
    login(payload: AuthPayload): void,
    setTokens(payload: AuthPayload): void,
    clearLocalStorage(): void,
    logout(): void,
}

const authPlugin:Plugin = ({ app, $cookies }, inject) => {
  const auth:IAuth = {
    isLoggedIn () {
      return !!$cookies.get('Token')
    },
    login (tokens: AuthPayload) {
      auth.clearLocalStorage()
      auth.setTokens(tokens)
    },
    setTokens (tokens: AuthPayload) {
      $cookies.set('Token', tokens.Token)
      $cookies.set('RefreshToken', tokens.RefreshToken)
    },
    clearLocalStorage () {
      $cookies.remove('Token')
      $cookies.remove('RefreshToken')
    },
    logout (manual?:boolean) {
      auth.clearLocalStorage()

      if (manual) {
        app?.router?.push(app.localePath('/login'))
      } else {
        app?.router?.push({
          path: app.localePath('/login'),
          query: {
            redirectUrl: `${window.location.pathname}${window.location.search}`
          }
        })
      }
    }
  }
  inject('auth', auth)
}

declare module 'vue/types/vue' {
    // this.$auth inside Vue components
    interface Vue {
        $auth: IAuth
    }
}

declare module '@nuxt/types' {
    // nuxtContext.app.$auth inside asyncData, fetch, plugins, middleware, nuxtServerInit
    interface NuxtAppOptions {
        $auth: IAuth
    }
    // nuxtContext.$auth
    interface Context {
        $auth: IAuth
    }
}

export default authPlugin
