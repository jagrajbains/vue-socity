<template>
  <div>
    {{ $route.params.city }}
  </div>
</template>

<script>
export default {
  middleware: 'cityCheck'
}
</script>
