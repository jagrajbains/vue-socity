<template>
  <div>
    <div class="main-blur-img-container">
      <img :src="headerImageURL" class="main-blur-img" />
      <div class="header-img-container">
        <img :src="headerImageURL" class="header-img" />
      </div>
    </div>
    <!-- article container -->
    <div class="row article-container">
      <!-- stuff to the left -->
      <!-- TODO: toggle display property -->
      <div :class="`col-lg-3 col-md-3`"></div>
      <!-- article body container -->
      <div class="col-lg-6 col-md-6 col-sm-12">
        <!-- title container -->
        <div class="title-container">
          <p class="title-text">{{ articleData.title }}</p>
        </div>
        <!-- author info -->
        <div class="author-info-container">
          <div class="author-info">
            <img :src="publisherData.cloudProfile" class="author-img" />
            <div class="author-info-text">
              <span class="author-name">{{ publisherData.displayName }}</span>
              <span class="publish-date">
                {{ getTimeAgo(articleData.updatedAt) }}
              </span>
            </div>
          </div>
          <div class="follow-btn">Follow</div>
        </div>
        <!-- introduction -->
        <div v-html="articleIntroduction" class="article-content"></div>
        <!-- share section -->
        <div class="share-container">
          <div class="fb-container">
            <img src="../../../../assets/fb-icon.svg" />
            <p>Share on facebook</p>
          </div>
          <div class="bkm-container">
            <img src="../../../../assets/fb-icon.svg" />
            <p>Bookmark this article</p>
          </div>
        </div>
        <!-- Next article -->
        <div>
          <div class="article-border"></div>
          <div class="article-border-pointer"></div>
          <div
            style="display: flex; justify-content: center; position: relative; top: 25px;"
          >
            <p class="next-article">NEXT ARTICLE</p>
          </div>
        </div>
      </div>
      <!-- stuff to the right -->
      <div class="col-lg-3 col-md-3"></div>
    </div>
  </div>
</template>

<script>
import $ from 'cheerio'
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
    },
    articleIntroduction() {
      const container = $.parseHTML(
        `<div>${this.articleData.introduction}</div>`
      )
      $(container[0])
        .find('img')
        .each(function(idx, img) {
          const imageParentInnerHTML = $(img)
            .parent()
            .html()
          $(img).parent().replaceWith(`
      <div class="blur-main-content-img-container">
      <img src="${img.attribs.src}" class="blur-main-content-img" />
      <div class="main-content-img-container">${imageParentInnerHTML}</div>
      </div>
      `)
        })
      return $(container).html()
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

<style>
.blur-main-content-img-container {
  width: 735px;
  position: relative;
  height: 300px;
  margin: 50px 0px;
  overflow: hidden;
}
.blur-main-content-img {
  filter: blur(15px) brightness(90%);
  width: 100%;
  height: 100%;
}
.main-content-img-container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 500px;
}
.main-content-img-container img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.main-blur-img {
  filter: blur(6px);
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.main-blur-img-container {
  width: 100%;
  position: relative;
  height: 500px;
  overflow: hidden;
}
.header-img-container {
  position: absolute;
  top: -4px;
  bottom: -4px;
  left: 50%;
  transform: translate(-50%, 0);
  height: 100%;
}
.header-img {
  height: 500px;
}
.article-container {
  box-shadow: 0 -5px 5px -5px #000;
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
  border-bottom: 1px solid lightgray;
}
.article-border {
  width: auto;
  height: 5px;
  background-color: #13cb86;
}
.article-border-pointer {
  width: 30px;
  height: 30px;
  background-color: #13cb86;
  clip-path: polygon(52% 50%, 100% 50%, 50% 100%, 0% 50%);
  position: absolute;
  bottom: 40px;
  left: 48%;
}
.next-article {
  font-family: inherit;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.33;
  letter-spacing: normal;
  color: #404040;
}
.fb-container {
  width: 229px;
  height: 48px;
  border-radius: 24px;
  background-color: #1976d2;
  display: flex;
  justify-content: space-evenly;
}
.fb-container p {
  margin: 0px !important;
  align-self: center;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
}
.bkm-container {
  width: 261px;
  height: 48px;
  border-radius: 24px;
  background-color: #393939;
  display: flex;
  justify-content: space-evenly;
}
.bkm-container p {
  margin: 0px !important;
  align-self: center;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
}
.share-container {
  display: flex;
  padding-top: 35px;
  padding-bottom: 65px;
  justify-content: space-evenly;
}
</style>
