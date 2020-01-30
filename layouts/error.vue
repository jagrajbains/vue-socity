<template>
  <div>
    <Header />
    Custom error page
  </div>
</template>
<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  },
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
