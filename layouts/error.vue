<template>
  <div>
    <h1>
      {{ statusCode }}
    </h1>
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'PAGE NOT FOUND',
      otherError: 'An error occurred'
    }
  },
  head () {
    return {
      title: this.message
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.statusCode === 404 ? this.pageNotFound : this.error.message || this.otherError
    }
  }
}
</script>

<style lang="scss" scoped>
// styles
</style>
