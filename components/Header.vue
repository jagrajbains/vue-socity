<template>
  <div>
    <div class="row header-container">
      <div class="col-lg-10 left-side">
        <div @click="$router.back()" class="back-btn">
          <img src="../assets/arrow.svg" />
        </div>
        <div class="logo">
          <nuxt-link to="/"><img src="../assets/so_logo.svg"/></nuxt-link>
        </div>
        <div class="city-names">{{ cityName }}</div>
        <div id="arrow" @click="toggleDropdown">
          <img src="../assets/arrow.svg" />
        </div>
        <transition name="fade">
          <Dropdown v-if="showDropdown" :toggleDropdown="toggleDropdown" />
        </transition>
      </div>
      <div class="col-lg-2 right-side">
        <div class="write-a-post">Write A Post</div>
        <div class="search"><img src="../assets/search.svg" /></div>
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
  margin-right: 0px;
  margin-left: 0px;
}
.back-btn {
  cursor: pointer;
  width: 20px;
  height: 17px;
}
.back-btn img {
  transform: rotate(180deg);
  height: 100%;
}
.city-names {
  position: relative;
  left: 32px;
  top: 3px;
}
#arrow {
  cursor: pointer;
  position: relative;
  left: 36px;
  top: 3px;
}
#arrow img {
  width: 12px;
  height: 12px;
  transform: rotate(90deg);
}
.write-a-post {
  cursor: pointer;
}
.search {
  cursor: pointer;
}
.search img {
  width: 20px;
}
.logo {
  position: relative;
  left: 25px;
}
.logo img {
  height: 30px;
  cursor: pointer;
  width: 30px;
  object-fit: contain;
}
</style>
