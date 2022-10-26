<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height grayscale lighten-6">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class LoginLayout extends Vue {
}
</script>
