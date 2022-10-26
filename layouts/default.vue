<template>
  <v-app>
    <core-navigation-drawer v-model="drawer" />
    <core-right-navigation-drawer :right-drawer.sync="rightDrawer" />
    <core-navigation-header app :drawer.sync="drawer" :right-drawer.sync="rightDrawer" />

    <v-main>
      <div class="pa-4 fill-height d-flex flex-column">
        <nuxt />
      </div>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  drawer = true

  rightDrawer = false
}
</script>
