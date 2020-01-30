<template>
  <div id="dropdown" class="dropdown row">
    <div
      v-for="city in cities"
      :key="city.key"
      class="col-md-1 text-center city-name"
    >
      <div>
        <img :src="city.img" class="city-img" />
        <p>{{ city.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import constants from '~/constants'
export default {
  props: {
    toggleDropdown: {
      type: Function,
      required: true
    }
  },
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
        this.toggleDropdown()
      }
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: absolute;
  width: 100%;
  border: 1px solid black;
  background-color: grey;
  z-index: 9999;
  top: 46px;
  left: 80px;
}
.city-name {
  font-size: 14px;
}
.city-img {
  box-sizing: border-box;
  height: 31px;
}
</style>
