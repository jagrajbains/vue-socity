<template>
  <div>
    Single article page
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleData: null
    }
  },
  middleware: 'cityCheck',
  async asyncData({ params, $axios, error }) {
    try {
      const { city, articleId } = params
      // undefiend is for token!
      const resp = await $axios.get(
        `/articles/fetchArticle/${city}/${articleId}/undefined`
      )
      return { articleData: resp.data }
    } catch (err) {
      error({ statusCode: 404, message: 'Not Found!' })
      // return { articleData: null, error: true }
    }
  }
}
</script>
