<template>
  <div>
    <SingleArticle
      :isMainArticle="true"
      v-on:articleReadDone="handleArticleReadDone"
      :article="article"
    />
    <div v-if="loading">
      Loading...
    </div>
    <div
      v-else-if="relatedArticles"
      v-for="(r, idx) in relatedArticles"
      :key="idx"
    >
      <SingleArticle :article="r" />
    </div>
  </div>
</template>

<script>
import { getTimeAgo } from '~/utils'
import SingleArticle from '~/components/SingleArticle'

export default {
  components: {
    SingleArticle
  },
  data() {
    return {
      loading: false,
      article: null,
      relatedArticles: null
    }
  },
  async asyncData({ params, $axios, error }) {
    try {
      const { city, articleId } = params
      // undefiend is for token!
      const resp = await $axios.get(
        `/articles/fetchArticle/${city}/${articleId}/undefined`
      )
      return { article: resp.data }
    } catch (err) {
      console.error(err)
      error({ statusCode: 404, message: 'Not Found!' })
    }
  },
  created() {
    this.$nuxt.$on('pushState', this.handlePushState)
  },
  beforeDestroy() {
    this.$nuxt.$off('pushState')
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  middleware: 'cityCheck',
  methods: {
    getTimeAgo,
    handlePushState({ city, article }) {
      console.log('push state triggered!', { city, article })
    },
    handleScroll() {
      const articles = Array.from(document.querySelectorAll('.single-article'))
      const ratios = []
      for (const article of articles) {
        const { width, top, bottom } = article.getBoundingClientRect()
        const articleWidth = width
        let articleHeight
        if (top <= 0) {
          if (bottom > window.innerHeight) {
            articleHeight = window.innerHeight
          } else {
            articleHeight = bottom
          }
        } else if (top > 0 && top <= window.innerHeight) {
          articleHeight = window.innerHeight - top
        } else {
          articleHeight = 0
        }

        const viewPortArea = window.innerHeight * window.innerWidth
        const articleArea = articleWidth * articleHeight
        ratios.push(articleArea / viewPortArea)
      }
      const maxRatio = Math.max(...ratios)
      const maxRatioIndex = ratios.indexOf(maxRatio)

      const { pathname } = window.location
      const articleId = pathname.split('/')[pathname.split('/').length - 1]
      const city = pathname.split('/')[1]
      if (maxRatioIndex === 0) {
        // change url to this.article.data.articleData._id
        if (articleId !== this.article.data.articleData._id) {
          this.changeURL(this.article.data.articleData._id, city)
        }
      } else if (maxRatioIndex !== -1) {
        // change url to this.relatedArticles[maxRatioIndex - 1].data.articleData._id
        // eslint-disable-next-line no-lonely-if
        if (
          articleId !==
          this.relatedArticles[maxRatioIndex - 1].data.articleData._id
        ) {
          this.changeURL(
            this.relatedArticles[maxRatioIndex - 1].data.articleData._id,
            city
          )
        }
      }
    },
    changeURL(id, city) {
      window.history.pushState({}, null, `/delhi/article/${id}`)
      this.$nuxt.$emit('pushState', { city, article: id })
    },
    async handleArticleReadDone() {
      if (this.relatedArticles || this.loading) return
      // fetch more related articles
      const { categories, publishDate, _id } = this.article.data.articleData
      const { city } = this.$route.params
      this.loading = true
      const resp2 = await this.$axios.post(
        'https://soapi.in:3001/feed/relatedFeeds',
        {
          city,
          batchSize: 3,
          publishedDate: publishDate,
          categories,
          _id
        }
      )
      const relatedArticleArr = resp2.data.data.articles.map((a) => {
        const pub = resp2.data.data.publishers.find(
          (p) => p.username === a.createdBy
        )
        return {
          data: {
            articleData: a,
            publisherData: pub
          }
        }
      })
      this.relatedArticles = relatedArticleArr
      this.loading = false
    }
  }
}
</script>

<style scoped>
.header-img-container {
  position: absolute;
  top: -4px;
  bottom: -4px;
  left: 50%;
  transform: translate(-50%, 0);
  height: 100%;
}
.header-img {
  height: 568px;
}
.article-container {
  box-shadow: 0 -5px 5px -5px #000;
  margin-top: 6px;
}
.title-container {
  margin-top: 72px;
}

.title-text {
  font-family: 'Crimson Pro', serif;
  font-size: 40px;
  font-weight: bolder;
  line-height: 55px;
  margin-bottom: 10px;
  color: #404040;
}

.author-info-container {
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Open Sans', serif;
}

.author-info {
  display: flex;
  align-items: center;
}

.author-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 18px;
}

.author-info-text {
  color: #404040;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  margin-left: 21px;
  line-height: 2px;
}

.author-name {
  font-weight: bold;
  line-height: 2.5;
}

.publish-date {
  opacity: 0.4;
}

.follow-btn {
  font-size: 18px;
  color: #13cb86;
  padding: 13px 38px;
  border: 1px solid #13cb86;
  border-radius: 2px;
  margin-top: 18px;
}

.article-content {
  margin-top: 15px;
  font-family: 'Open Sans', serif;
  line-height: 30px;
  color: #0a0a0a;
}
</style>
