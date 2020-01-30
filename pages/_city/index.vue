<template>
  <div>
    {{ $route.params.city }}
  </div>
</template>

<script>
import constants from '~/constants'

export default {
  validate({ params }) {
    return constants.CITIES.includes(params.city)
  }
}
</script>
