<template>
  <div>
    <div
      style="text-align: center; width: 100%; position: relative; height: 560px; border: 1px solid black"
      class="header-image-parallax"
    >
      <img
        :src="headerImageURL"
        :style="{
          filter: 'blur(4px)',
          width: '100%',
          height: '100%',
          objectFit: 'fill'
        }"
      />
      <div
        class="header-img"
        style="position: absolute; top: 0; left: 50%; transform: translate(-50%, 0);"
      >
        <img :src="headerImageURL" />
      </div>
    </div>
    <!-- article container -->
    <div class="row">
      <!-- stuff to the left -->
      <!-- TODO: toggle display property -->
      <div :class="`col-lg-2 col-md-2`">
        Im on left
      </div>
      <!-- article body container -->
      <div class="col-lg-8 col-md-8 col-sm-12">
        <!-- title container -->
        <div>
          <h1>{{ articleData.title }}</h1>
        </div>
        <!-- author info -->
        <div style="border-bottom: 1px solid black">
          <img :src="publisherData.cloudProfile" width="50" height="50" />
          <span>{{ publisherData.displayName }}</span>
          <span>Last updated: {{ getTimeAgo(articleData.updatedAt) }}</span>
          <button>Follow</button>
        </div>
        <!-- introduction -->
        <div v-html="articleData.introduction"></div>
        <!-- share section -->
        <div>
          <div>Share on facebook</div>
          <div>Bookmark this article</div>
        </div>
        <!-- Next article -->
        <div>Next article</div>
      </div>
      <!-- stuff to the right -->
      <div class="col-lg-2 col-md-2">
        Im on the right
      </div>
    </div>
  </div>
</template>

<script>
import { getTimeAgo } from '~/utils'

export default {
  data() {
    return {
      article: null
    }
  },
  computed: {
    articleData() {
      return this.article.data.articleData
    },
    publisherData() {
      return this.article.data.publisherData
    },
    headerImageURL() {
      return `https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto,q_auto:eco,c_limit/${this.articleData.imageSlug}`
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
      return { article: resp.data }
    } catch (err) {
      error({ statusCode: 404, message: 'Not Found!' })
      // return { articleData: null, error: true }
    }
  },
  methods: {
    getTimeAgo
  }
}
</script>
