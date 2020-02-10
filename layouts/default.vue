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
      this.isHome =
        this.$route.params.city ||
        this.$route.path === '/contact-us' ||
        this.$route.path === '/about' ||
        this.$route.path === '/privacy' ||
        this.$route.path === '/careers' ||
        this.$route.path === '/terms-of-use' ||
        this.$route.path === '/community-guidelines'
      return this.isHome
    }
  }
}
</script>
