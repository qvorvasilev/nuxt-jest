import { Plugin } from '@nuxt/types'
import { IDynamicObject } from '~/types/shared'
import { IUtil } from '~/types/util'

const utilPlugin:Plugin = ({ i18n }, inject) => {
  const util:IUtil = {
    checkForDefaultValues (queryObj: IDynamicObject, searchParams: IDynamicObject) {
      return { ...queryObj, ...searchParams }
    },
    parseQuery (searchParams?: any) {
      return searchParams
    },
    monthsMap: [
      i18n.tc('months.Jan'),
      i18n.tc('months.Feb'),
      i18n.tc('months.Mar'),
      i18n.tc('months.Apr'),
      i18n.tc('months.May'),
      i18n.tc('months.Jun'),
      i18n.tc('months.Jul'),
      i18n.tc('months.Aug'),
      i18n.tc('months.Sep'),
      i18n.tc('months.Oct'),
      i18n.tc('months.Nov'),
      i18n.tc('months.Dec')
    ],
    computeDate (input) {
      if (!input || isNaN(input)) {
        return ''
      }

      const dateFromTimestamp = new Date(input)
      const month = dateFromTimestamp.getMonth()
      const date = dateFromTimestamp.getDate()
      const year = dateFromTimestamp.getFullYear()

      return `${util.monthsMap[month]} ${date}, ${year} ${dateFromTimestamp.toLocaleTimeString()}`
    }

  }
  inject('util', util)
}

declare module 'vue/types/vue' {
    // this.$util inside Vue components
    interface Vue {
        $util: IUtil
    }
}

declare module '@nuxt/types' {
    // nuxtContext.app.$util inside asyncData, fetch, plugins, middleware, nuxtServerInit
    interface NuxtAppOptions {
        $util: IUtil
    }
    // nuxtContext.$util
    interface Context {
        $util: IUtil
    }
}

export default utilPlugin
