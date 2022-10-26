<template>
  <v-card class="pa-5 mx-auto my-auto" width="500px" max-width="100%">
    <div class="d-flex align-center justify-space-between mb-2">
      <h1 v-if="title" data-testid="title-value">
        {{ title }}
      </h1>

      <div>
        <v-btn
            v-for="lang in languages"
            :key="lang.code"
            text
            tile
            class="px-1"
            x-small
            :to="switchLocalePath(lang.code)"
        >
          {{ lang.code }}
        </v-btn>
      </div>
    </div>

    <slot />
  </v-card>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class Card extends Vue {
  @Prop() readonly title?: string

  languages = [
    {
      code: 'bg',
      name: 'Български'
    },
    {
      code: 'en',
      name: 'English'
    }
  ]
}
</script>
