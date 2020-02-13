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
      showDropdown: false
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
    this.initialHeaderOffset = this.$refs.headerComponent.offsetTop

    window.addEventListener('scroll', this.handleScroll)

    this.handleScroll()
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    changeCity(city) {
      this.toggleDropdown()
      this.$router.push(`/${city}`)
    },
    handleScroll() {
      if (window.pageYOffset <= this.initialHeaderOffset) {
        this.$refs.headerComponent.classList.remove('sticky')
        this.$emit('removePaddingTop')
      }
      if (window.pageYOffset > this.$refs.headerComponent.offsetTop) {
        this.$refs.headerComponent.classList.add('sticky')
        this.$emit('addPaddingTop')
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
.city-names {
  position: relative;
  left: 32px;
  align-self: center;
  font-size: 14px;
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
