<template>
  <div>
    <div class="row header-container">
      <div class="col-lg-10 left-side">
        <div @click="$router.back()" class="col-lg-2">Back</div>
        <div><nuxt-link to="/">Logo</nuxt-link></div>
        <div>{{ cityName }}</div>
        <div id="arrow" @click="toggleDropdown">Arrow</div>
        <transition name="fade">
          <Dropdown v-if="showDropdown" :toggleDropdown="toggleDropdown" />
        </transition>
      </div>
      <div class="col-lg-2 right-side">
        <div>Write A Post</div>
        <div>Search</div>
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from './Dropdown'
import constants from '~/constants'

export default {
  components: {
    Dropdown
  },
  data() {
    return {
      city: this.$route.params.city,
      showDropdown: false
    }
  },
  computed: {
    cityName() {
      const city = constants.CITIES.find((c) => c.key === this.city)
      return city ? city.name : 'Delhi'
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.left-side {
  display: flex;
  align-self: center;
}
.right-side {
  display: flex;
  justify-content: space-evenly;
  align-self: center;
}
.header-container {
  height: 70px;
}
</style>
