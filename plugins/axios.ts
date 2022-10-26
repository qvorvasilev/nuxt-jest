import { Plugin } from '@nuxt/types'

const axiosPlugin:Plugin = ({ $axios, $auth, $cookies }) => {
  let isRefreshing = false

  $axios.onRequest((config: any) => {
    if (!isRefreshing) {
      config.headers.Authorization = `Bearer ${$cookies.get('Token') || ''}`
    }
  })

  $axios.onResponseError(async (error: any) => {
    const code = parseInt(error.response && error.response.status)

    if (!code) {
      console.log('Ooops, something went wrong')
      // $notification.show({
      //   type: 'error',
      //   message: 'Oops, something went wrong.'
      // })
    }

    if (error.response && error.response.data) {
      error.GlobalError = error.response.data.GlobalError
      error.FieldsError = error.response.data.FieldsError
    }

    switch (code) {
      case 400:
        if (!error.GlobalError && !error.FieldsError) {
          console.log('error', error.response)
          // $notification.show({
          //   type: 'error',
          //   message: error.response
          // })
        }

        throw error
      case 401:
        if (isRefreshing) {
          isRefreshing = false
          $auth.logout()
          break
        }

        try {
          isRefreshing = true
          const response = await $axios.post(
            '/dev/generate-token/',
            {},
            {
              headers: {
                Authorization: `Bearer ${$cookies.get('RefreshToken')}`
              }
            }
          )

          if (response.data) {
            $auth.setTokens(response.data)
            error.config.headers.Authorization = `Bearer ${$cookies.get('Token')}`
            await $axios(error.config)
              .then((resp) => {
                isRefreshing = false

                return resp
              })
              .catch((e) => {
                isRefreshing = false
                $auth.logout()
                console.log('error', e.GlobalError || e)
                // $notification.show({
                //   type: 'error',
                //   message: e.GlobalError || e
                // })
              })
          }
        } catch (err) {
          isRefreshing = false
          // @ts-ignore
          if (err.response && err.response.status !== 401) {
            return
          }

          console.log('error', 'ERROR: 401')
          // $notification.show({ type: 'error', message: 'ERROR: 401' })
          $auth.logout()
        }
        break
      default:
        throw error
    }
  })
}

export default axiosPlugin
