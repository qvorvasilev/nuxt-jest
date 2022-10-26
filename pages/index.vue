<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {
  created () {
    this.$router.push(this.localePath('/login'))
  }
}

</script>
