<template>
  <login-card :title="$t('page.login')">
    <v-form v-model="valid">
      <v-text-field
        v-model="formData.Email"
        :rules="[$v.required(), $v.email(), $v.minLength(6), $v.maxLength(64)]"
        :label="$t('form.Email')"
        outlined
      />
      <v-text-field
        v-model="formData.Password"
        :rules="[$v.required(), $v.minLength(6), $v.maxLength(64)]"
        :label="$t('form.Password')"
        outlined
      />
      <div class="d-flex align-center justify-space-between">
        <nuxt-link :to="localePath('/forgotten-password')">
          {{ $t('btn.forgotten_password') }}
        </nuxt-link>

        <v-btn color="primary" :disabled="!valid" @click="login">
          {{ $t('btn.login') }}
        </v-btn>
      </div>
    </v-form>
  </login-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { LoginRequest } from '~/types/request/login'
import { LoginResponse } from '~/types/response/login'

@Component({
  layout: 'login'
})
export default class Login extends Vue {
  valid = false

  formData: LoginRequest = {
    Email: undefined,
    Password: undefined
  }

  async login () {
    await this.$axios.post('/account/email/login/', this.formData)
      .then(async (response) => {
        const data: LoginResponse = response.data

        await this.$auth.login(data)
        await this.$router.push(this.localePath('/'))
      }).catch(({ error }) => {
        console.log(error)
      })
  }
}

</script>
