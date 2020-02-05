<template>
  <div>
    Custom error page
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
