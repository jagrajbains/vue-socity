<template>
  <div class="overFXN">
    <Header v-if="isHomeroute()" />
    <div class="main-body-wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  },
  data() {
    return {
      isHome: false
    }
  },
  methods: {
    isHomeroute() {
      this.isHome = this.$route.name === 'index'
      return !this.isHome
    }
  }
}
</script>
