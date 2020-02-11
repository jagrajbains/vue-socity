<template>
  <div>
    <div ref="headerComponent" class="row header-container">
      <div class="col-2 ham-menu" style="text-align: center;">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
      <div class="col-lg-9 col-8 left-side">
        <div @click="$router.back()" class="back-btn">
          <img src="../assets/arrow.svg" />
        </div>
        <div class="logo">
          <nuxt-link to="/">
            <img src="../assets/so_logo.svg" />
          </nuxt-link>
        </div>
        <div class="city-names">{{ cityName }}</div>
        <div id="arrow" @click="toggleDropdown">
          <img src="../assets/arrow.svg" />
        </div>
      </div>
      <div class="col-lg-3 col-2 right-side">
        <label class="switch-wrap">
          <input type="checkbox" />
          <div @click="toggleDarkMode" class="switch"></div>
        </label>
        <div class="write-a-post">Write A Post</div>
        <div class="search">
          <img src="../assets/search.svg" />
        </div>
      </div>
    </div>
    <transition name="fade">
      <Dropdown
        v-if="showDropdown"
        v-on:closeDropdown="toggleDropdown"
        v-on:changeCity="changeCity"
      />
    </transition>
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
      showDropdown: false,
      isDark: false
    }
  },
  computed: {
    cityName() {
      const city = constants.CITIES.find((c) => c.key === this.city)
      return city ? city.name : 'Delhi'
    }
  },
  watch: {
    $route: {
      handler() {
        this.city = this.$route.params.city
      }
    }
  },
  mounted() {
    this.mainBodyWrapper = document.querySelector('.main-body-wrapper')
    this.initialHeaderOffset = this.$refs.headerComponent.offsetTop

    window.addEventListener('scroll', this.handleScroll)

    this.handleScroll()
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    toggleDarkMode() {
      this.isDark = !this.isDark
      if (this.isDark) {
        document.body.classList.add('dark-theme')
      } else {
        document.body.classList.remove('dark-theme')
      }
    },
    changeCity(city) {
      this.toggleDropdown()
      this.$router.push(`/${city}`)
    },
    handleScroll() {
      if (window.pageYOffset <= this.initialHeaderOffset) {
        this.$refs.headerComponent.classList.remove('sticky')
        this.mainBodyWrapper.classList.remove('pt-75')
      }
      if (window.pageYOffset > this.$refs.headerComponent.offsetTop) {
        this.$refs.headerComponent.classList.add('sticky')
        this.mainBodyWrapper.classList.add('pt-75')
      }
    }
  }
}
</script>

<style scoped>
.ham-menu {
  display: none;
}
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
  width: 100%;
  z-index: 1;
  background-color: white;
  height: 70px;
  margin-right: 0px;
  margin-left: 0px;
  box-shadow: 0px 0px 3px 0 #000000;
  transition: background-color 0.25s ease-in;
}

body.dark-theme .header-container {
  background-color: #273142;
  transition: background-color 0.25s ease-out;
}
.back-btn {
  cursor: pointer;
  width: 20px;
  height: 14px;
  position: relative;
  top: 10px;
}
.back-btn img {
  transform: rotate(180deg);
  height: 100%;
}
body.dark-theme .back-btn img {
  color: white;
}
.city-names {
  position: relative;
  left: 32px;
  align-self: center;
  font-size: 14px;
}
body.dark-theme .city-names {
  color: white;
}
#arrow {
  cursor: pointer;
  position: relative;
  left: 36px;
  align-self: center;
}
#arrow img {
  width: 12px;
  height: 12px;
  transform: rotate(90deg);
}
.write-a-post {
  cursor: pointer;
  font-size: 14px;
  padding-top: 3px;
}
.write-a-post:hover {
  color: #686868;
}
body.dark-theme .write-a-post {
  color: white;
}
.search {
  cursor: pointer;
}
.search:hover {
  color: #686868;
}
.search img {
  width: 16px;
}
.logo {
  position: relative;
  left: 25px;
  height: 45px;
  width: 41px;
}
.logo img {
  height: 45px;
  cursor: pointer;
  width: 40px;
  object-fit: contain;
}
.sticky {
  position: fixed;
  top: 0;
}
.switch-wrap {
  cursor: pointer;
  background: #15273b;
  padding: 7px;
  width: 60px;
  height: 35px;
  border-radius: 33.5px;
}
.switch-wrap input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.switch {
  height: 100%;
  display: grid;
  grid-template-columns: 0fr 1fr 1fr;
  transition: 0.2s;
}
.switch::after {
  content: '';
  border-radius: 50%;
  background: #ccc;
  grid-column: 2;
  transition: background 0.2s;
}
input:checked + .switch {
  grid-template-columns: 1fr 1fr 0fr;
}
input:checked + .switch::after {
  background-color: #52cf71;
}
@media only screen and (max-width: 768px) {
  .back-btn {
    display: none;
  }
  .write-a-post {
    display: none;
  }
}
@media only screen and (min-width: 280px) and (max-width: 576px) {
  .ham-menu {
    display: block;
    align-self: center;
  }
  .left-side {
    justify-content: center;
  }
  .logo {
    left: -10px;
  }
  .city-names {
    left: -6px;
  }
  #arrow {
    left: 0px;
  }
  .right-side {
    text-align: center;
  }
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
  .ham-menu {
    display: block;
    align-self: center;
  }
  .left-side {
    justify-content: center;
  }
  .logo {
    left: -10px;
  }
  .city-names {
    left: -6px;
  }
  #arrow {
    left: 0px;
  }
  .right-side {
    text-align: center;
  }
}
</style>
