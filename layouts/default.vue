<template>
  <div class="overFXN">
    <Header />
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
  }
}
</script>
