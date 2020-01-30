<template>
  <div>
    <Header />
    <nuxt-link to="/">
      Home
    </nuxt-link>
    <nuxt-link
      to="/delhi/article/12-awesome-places-to-take-on-that-much-delayed-coffee-date-with-your-bff"
    >
      Single article Page
    </nuxt-link>
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>
