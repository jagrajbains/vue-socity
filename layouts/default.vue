<template>
  <div class="overFXN">
    <Header
      @addPaddingTop="addPaddingTop"
      @removePaddingTop="removePaddingTop"
    />
    <div ref="mainBodyWrapper" class="main-body-wrapper">
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
  methods: {
    addPaddingTop() {
      this.$refs.mainBodyWrapper.classList.add('pt-75')
    },
    removePaddingTop() {
      this.$refs.mainBodyWrapper.classList.remove('pt-75')
    }
  }
}
</script>
