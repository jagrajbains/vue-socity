<template>
  <div>
    <SingleArticle
      :isMainArticle="true"
      v-on:articleReadDone="handleArticleReadDone"
      :article="article"
      :isPrevDisabled="true"
      :isNextDisabled="!relatedArticles"
      :nextArticle="nextArticle()"
      @topCrossedUp="handleTopCrossedUp"
      @topCrossedDown="handleTopCrossedDown"
      @bottomCrossedUp="handleBottomCrossedUp"
      @bottomCrossedDown="handleBottomCrossedDown"
    />
    <div v-if="loading">
      <Loader />
    </div>
    <div
      v-else-if="relatedArticles"
      v-for="(r, idx) in relatedArticles"
      :key="idx"
    >
      <SingleArticle
        :article="r"
        :isNextDisabled="idx === relatedArticles.length - 1"
        :nextArticle="nextArticle(true, idx)"
        :prevArticle="prevArticle(idx)"
        @topCrossedUp="handleTopCrossedUp"
        @topCrossedDown="handleTopCrossedDown"
        @bottomCrossedUp="handleBottomCrossedUp"
        @bottomCrossedDown="handleBottomCrossedDown"
      />
    </div>
  </div>
</template>

<script>
import SingleArticle from '~/components/SingleArticle'
import Loader from '~/components/Loader'

export default {
  components: {
    SingleArticle,
    Loader
  },
  data() {
    return {
      loading: false,
      article: null,
      relatedArticles: null,
      selectedArticle: null
    }
  },
  computed: {
    title() {
      const { title } = this.selectedArticle
      return title
    }
  },
  async asyncData({ params, $axios, error }) {
    try {
      const { city, articleId } = params
      // undefiend is for token!
      const resp = await $axios.get(
        `/articles/fetchArticle/${city}/${articleId}/undefined`
      )
      return { article: resp.data, selectedArticle: resp.data.data.articleData }
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
    getArticleContainer(id) {
      return document.querySelector(`.single-article[data-id="${id}"]`)
    },
    handleTopCrossedUp(_id) {
      const article = this.getArticleContainer(_id)
      const nextBtn = article.getElementsByClassName(
        'right-column-container'
      )[0]
      nextBtn.style.position = 'fixed'
      nextBtn.style.top = '150px'
    },
    handleTopCrossedDown(_id) {
      const article = this.getArticleContainer(_id)
      const nextBtn = article.getElementsByClassName(
        'right-column-container'
      )[0]
      nextBtn.style.position = 'relative'
    },
    handleBottomCrossedUp(_id) {
      const article = this.getArticleContainer(_id)
      const nextBtn = article.getElementsByClassName(
        'right-column-container'
      )[0]
      nextBtn.style.position = 'relative'
      nextBtn.style.top = `${nextBtn.parentElement.offsetHeight - 400}px`
    },
    handleBottomCrossedDown(_id) {
      const article = this.getArticleContainer(_id)
      const nextBtn = article.getElementsByClassName(
        'right-column-container'
      )[0]
      nextBtn.style.position = 'fixed'
      nextBtn.style.top = '150px'
    },
    nextArticle(isRelatedArticle = false, index) {
      if (!this.relatedArticles) {
        return {}
      }
      if (isRelatedArticle) {
        const nextarticle = this.relatedArticles[index + 1]
        return nextarticle
          ? {
              _id: nextarticle.data.articleData._id,
              title: nextarticle.data.articleData.title
            }
          : {}
      }

      return {
        _id: this.relatedArticles[0].data.articleData._id,
        title: this.relatedArticles[0].data.articleData.title
      }
    },
    prevArticle(index) {
      if (!this.relatedArticles) return ''

      if (index >= 1) {
        return {
          _id: this.relatedArticles[index - 1].data.articleData._id,
          title: this.relatedArticles[index - 1].data.articleData.title
        }
      }
      return {
        _id: this.article.data.articleData._id,
        title: this.article.data.articleData.title
      }
    },
    handlePushState({ city, article }) {
      if (this.article.data.articleData._id === article) {
        this.selectedArticle = this.article.data.articleData
      } else {
        const relArticle = this.relatedArticles.find(
          (r) => r.data.articleData._id === article
        )
        this.selectedArticle = relArticle.data.articleData
      }
    },
    nextArticleBtnHandler() {
      // const { _id } = this.selectedArticle
      // const selectedArticleContainer = document.querySelector(
      //   `.single-article[data-id="${_id}"]`
      // )
      // if (selectedArticleContainer) {
      //   const nextArticleBtn = selectedArticleContainer.getElementsByClassName(
      //     'right-column-container'
      //   )[0]
      //   // console.log('offset top of next btn:', nextArticleBtn.offsetTop)
      //   const nextBtnViewportRelativeTop = nextArticleBtn.getBoundingClientRect()
      //     .top
      //   // console.log('top relative to viewport is', nextBtnViewportRelativeTop)
      //   // if next btn has been scrolled more than the page, make its position fixed
      //   const initialTop = this.initialTopNextBtns[_id]
      //   // initially when display is none, nextBtnViewportRelativeTop is 0
      //   const nextBtnDocumentRelativeTop =
      //     nextBtnViewportRelativeTop + window.pageYOffset
      //   if (nextBtnViewportRelativeTop !== 0) {
      //     if (
      //       nextBtnViewportRelativeTop < 0 &&
      //       window.pageYOffset > nextBtnViewportRelativeTop
      //     ) {
      //       // make it fixed!
      //       nextArticleBtn.style.position = 'fixed'
      //       nextArticleBtn.style.top = '150px'
      //     } else if (
      //       nextBtnDocumentRelativeTop <= initialTop &&
      //       nextArticleBtn.style.position !== 'relative'
      //     ) {
      //       nextArticleBtn.style.position = 'relative'
      //     }
      //   }
      //   // if (nextArticleBtn.offsetTop < window.pageYOffset) {
      //   //   // increment marginTop
      //   //   nextArticleBtn.style.position = 'fixed'
      //   //   nextArticleBtn.style.top = '300px'
      //   //   const selectedArticleHeight = selectedArticleContainer.getBoundingClientRect()
      //   //     .height
      //   //   if (
      //   //     window.pageYOffset - selectedArticleContainer.offsetTop + 800 >=
      //   //       selectedArticleHeight &&
      //   //     nextArticleBtn.style.position === 'fixed'
      //   //   ) {
      //   //     nextArticleBtn.style.position = 'relative'
      //   //     nextArticleBtn.style.top = `${window.pageYOffset -
      //   //       nextArticleBtn.parentElement.offsetTop}px`
      //   //     // `${window.pageYOffset -
      //   //     //   selectedArticleHeight}px`
      //   //   }
      //   //   // if (
      //   //   //   window.pageYOffset - selectedArticleContainer.offsetTop - 300 <=
      //   //   //   selectedArticleHeight - 1000
      //   //   // ) {
      //   //   //   console.log(
      //   //   //     window.pageYOffset,
      //   //   //     selectedArticleContainer.offsetTop,
      //   //   //     selectedArticleHeight
      //   //   //   )
      //   //   //   // nextArticleBtn.style.marginTop = `${window.pageYOffset -
      //   //   //   //   selectedArticleContainer.offsetTop -
      //   //   //   //   300}px`
      //   //   // }
      //   // }
      //   // const nextArticleBtnTop = nextArticleBtn.getBoundingClientRect().top
      //   // if (nextArticleBtnTop > 120) {
      //   //   nextArticleBtn.style.marginTop = Math.max(
      //   //     parseFloat(nextArticleBtn.style.marginTop),
      //   //     0
      //   //   )
      //   // }
      // }
    },
    handleScroll() {
      this.nextArticleBtnHandler()
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
        if (articleId !== this.article.data.articleData._id) {
          this.changeURL(this.article.data.articleData._id, city)
        }
      } else if (maxRatioIndex !== -1) {
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
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
