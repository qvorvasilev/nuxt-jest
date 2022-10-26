import { Plugin } from '@nuxt/types'
import Vue from 'vue'
import type { IValidate } from '~/types/validate'
const validators = require('vuelidate/lib/validators')

const ValidatePlugin:Plugin = ({ i18n }, inject) => {
  const validate:IValidate = {
    alpha (message) {
      // return (v: any) => validators.alpha(v) || message || i18n.t('validation.alpha')
      return (v: any) => /^[\p{L}+ *]+$/gu.test(v) || message || i18n.t('validation.alpha')
    },
    required (message) {
      return (v: any) =>
        validators.required(v) || message || i18n.t('validation.required')
    },
    email (message) {
      return (v: any) =>
        validators.email(v) || message || i18n.t('validation.email')
    },
    numeric (message) {
      return (v: any) =>
        validators.numeric(v) || message || i18n.t('validation.numeric')
    },
    maxLength (max, message) {
      return (v: any) =>
        validators.maxLength(max)(v) ||
                message ||
                i18n.t('validation.maxLengthOf', [max])
    },
    minLength (min, message) {
      return (v: any) =>
        validators.minLength(min)(v) ||
                message ||
                i18n.t('validation.minLengthOf', [min])
    },
    minValue (min, message) {
      return (v: any) =>
        validators.minValue(min)(v) ||
                message ||
                `${i18n.t('validation.minValue')} ${min}`
    },
    maxValue (min, message) {
      return (v: any) =>
        validators.maxValue(min)(v) ||
                message ||
                `${i18n.t('validation.maxValue')} ${min}`
    },
    repeatPassword (pass, message) {
      return (v: any) =>
        v === pass || message || i18n.t('validation.repeatPassword')
    },
    strongPassword (message) {
      return (v: any) => {
        if (!v) {
          return false
        }
        const containsSpace = /[ ]/.test(v)
        const containsUppercase = /[A-Z]/.test(v)
        const containsLowercase = /[a-z]/.test(v)
        const containsNumber = /[0-9]/.test(v)
        // const containsSpecial = /[#?!@$%^&*-_]/.test(v)

        return (!containsSpace && containsUppercase && containsLowercase && containsNumber) || message || i18n.t('validation.strongPassword')
      }
    },
    clearErrorMsg (errorsRefer, errorName) {
      return () => {
        errorsRefer[errorName] = []

        return true
      }
    },
    validRange (form, minFieldName, maxFieldName) {
      return () => {
        return (
          ((form?.[minFieldName] ?? 0) <= (form?.[maxFieldName] ?? 0) &&
                        !!String(form?.[minFieldName] ?? '').length ===
                        !!String(form?.[maxFieldName] ?? '').length) ||
                    i18n.t('validation.notValidRange')
        )
      }
    },
    triggerValidFieldByRefer (refs, referName) {
      Vue.nextTick(() => {
        refs?.[referName].validate?.(true)
      })
    },
    requiredIf (formData, ref, consists) {
      const isRefChecked = formData.includes(ref)
      let optionsChecked = false
      consists.forEach((el:string) => {
        if (formData.includes(el)) {
          optionsChecked = true

          return false
        }
      })

      return () => {
        if (isRefChecked) {
          return optionsChecked
        } else {
          return true
        }
      }
    }
  }
  inject('v', validate)
}

export default ValidatePlugin
