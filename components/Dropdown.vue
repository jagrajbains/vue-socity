<template>
  <div id="dropdown" class="dropdown row">
    <div
      v-for="city in cities"
      :key="city.key"
      class="col-md-1 text-center city-name city-choose"
    >
      <div class="current-city">
        <img :src="city.img" :class="`city-img ${city.key}`" />
        <p>{{ city.name }}</p>
      </div>
      <div v-if="city.key === $route.params.city"><p>Current City</p></div>
    </div>
  </div>
</template>

<script>
import constants from '~/constants'
export default {
  data() {
    return {
      cities: constants.CITIES
    }
  },
  mounted() {
    window.addEventListener('click', this.handleOutsideClick)
  },
  destroyed() {
    window.removeEventListener('click', this.handleOutsideClick)
  },
  methods: {
    handleOutsideClick(e) {
      // ignore if arrow is clicked
      if (e.target.closest('#arrow')) {
        return
      }

      if (!e.target.closest('#dropdown')) {
        this.$emit('closeDropdown')
      }
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: absolute;
  width: 88%;
  border: 1px solid black;
  background-color: white;
  z-index: 9999;
  top: 65px;
  left: 75px;
  border-radius: 5px;
}
.city-name {
  font-size: 14px;
  margin-top: 15px;
}
.city-img {
  box-sizing: border-box;
  height: 31px;
  padding-top: 15px;
}
.city-choose {
  box-sizing: border-box;
  width: 9.09%;
  padding: 1% 1% 3%;
  height: 98px;
}
.srinagar {
  width: 55px;
  height: auto;
  padding-top: 12px;
}
.current-city {
  box-sizing: border-box;
  border: 0.75px solid rgb(147, 137, 143);
}
</style>
