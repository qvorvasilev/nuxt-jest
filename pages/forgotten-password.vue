<template>
  <login-card :title="$t('page.forgotten_password')">
    <v-form v-model="valid">
      <v-text-field
        v-model="formData.Email"
        :rules="[$v.required(), $v.email()]"
        :label="$t('form.Email')"
        outlined
      />

      <div class="d-flex align-center justify-space-between">
        <nuxt-link :to="localePath('/login')">
          {{ $t('btn.login') }}
        </nuxt-link>

        <v-btn @click="submit">
          {{ $t('btn.submit') }}
        </v-btn>
      </div>
    </v-form>
  </login-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'login'
})
export default class Login extends Vue {
  valid = false

  formData = {
    Email: undefined
  }

  submit () {
    this.$router.push(this.localePath('/login'))
  }
}

</script>
