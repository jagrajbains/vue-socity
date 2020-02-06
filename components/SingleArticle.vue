<template>
  <div
    ref="article"
    :data-id="articleData._id"
    :class="['single-article', !isMainArticle && 'pt-75']"
  >
    <div class="main-blur-img-container">
      <img :src="headerImageURL" class="main-blur-img" />
      <div class="header-img-container">
        <img :src="headerImageURL" class="header-img" />
      </div>
    </div>
    <!-- article container -->
    <div class="row article-container">
      <!-- stuff to the left -->
      <div :class="`col-lg-3 col-md-3 prev-btn-container`">
        <transition name="fade">
          <div
            v-show="!isPrevDisabled"
            @click="handlePreviousClick"
            class="left-column-container"
          >
            <div class="left-column">
              <div class="left-column-next">
                <font-awesome-icon
                  :icon="['fas', 'chevron-up']"
                  class="left-column-next-icon"
                />
                <p class="left-column-next-text">PREV</p>
              </div>
              <p class="left-column-title">{{ prevArticle.title }}</p>
            </div>
          </div>
        </transition>
      </div>
      <div ref="topSeparator" class="top-sep" />
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
        <div ref="bottomSeparator" class="bottom-sep" />
        <!-- share section -->
        <div class="share-container">
          <div class="fb-container">
            <img src="../assets/fb-icon.svg" />
            <p>
              <a
                :href="
                  `https://www.facebook.com/sharer/sharer.php?u=so.city/${articleData.primaryCity}/article/${articleData._id}`
                "
                target="_blank"
                >Share on facebook</a
              >
            </p>
          </div>
          <div class="bkm-container">
            <font-awesome-icon
              :icon="['fas', 'bookmark']"
              style="align-self: center; color: white"
            />
            <p>Bookmark this article</p>
          </div>
        </div>
        <!-- Next article -->
        <div v-if="!isNextDisabled">
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
      <div class="col-lg-3 col-md-3 next-btn-container">
        <transition name="fade">
          <div
            v-show="!isNextDisabled"
            @click="handleNextClick"
            class="right-column-container"
          >
            <div class="right-column">
              <div class="right-column-next">
                <p class="right-column-next-text">NEXT</p>
                <font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  class="right-column-next-icon"
                />
              </div>
              <p class="right-column-title">{{ nextArticle.title }}</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import cheerio from 'cheerio'
import $ from 'jquery'
import { getTimeAgo } from '~/utils'

export default {
  props: {
    article: {
      type: Object,
      required: true
    },
    isMainArticle: {
      type: Boolean,
      default: false
    },
    isPrevDisabled: {
      type: Boolean,
      default: false
    },
    isNextDisabled: {
      type: Boolean,
      default: false
    },
    nextArticle: {
      type: Object,
      default: () => ({})
    },
    prevArticle: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isTopCrossed: false,
      isBottomCrossed: false
    }
  },
  computed: {
    articleData() {
      return this.$props.article.data.articleData
    },
    publisherData() {
      return this.$props.article.data.publisherData
    },
    headerImageURL() {
      return `https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/${this.articleData.imageSlug}`
    },
    articleIntroduction() {
      const container = cheerio.parseHTML(
        `<div>${this.articleData.introduction}</div>`
      )
      cheerio(container[0])
        .find('img')
        .each(function(idx, img) {
          const imageParentInnerHTML = cheerio(img)
            .parent()
            .html()
          cheerio(img).parent().replaceWith(`
            <div class="blur-main-content-img-container">
            <img src="${img.attribs.src}" class="blur-main-content-img" />
            <div class="main-content-img-container">${imageParentInnerHTML}</div>
            </div>
          `)
        })
      return cheerio(container).html()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    const imagesArr = Array.from(
      document.getElementsByClassName('main-content-img-container')
    )
    imagesArr.forEach((container) => {
      const img = container.children[0]
      if (img.addEventListener) {
        img.addEventListener('load', () => {
          this.imageClassAdder(img)
        })
      } else {
        img.attachEvent('onload', () => {
          this.imageClassAdder(img)
        })
      }
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    imageClassAdder(img) {
      const w = img.naturalWidth || img.width
      const h = img.naturalHeight || img.height
      if (w > h) {
        img.classList.add('main-content-landscape-img')
      } else {
        img.classList.add('main-content-portrait-img')
      }
    },
    handleNextClick() {
      const { nextArticle } = this.$props
      if (nextArticle) {
        $('html, body').animate(
          {
            scrollTop: document.querySelector(
              `.single-article[data-id="${nextArticle._id}"]`
            ).offsetTop
          },
          800
        )
        // document
        //   .querySelector(`.single-article[data-id="${nextArticle._id}"]`)
        //   .scrollIntoView({ behavior: 'smooth' })
      }
    },
    handlePreviousClick() {
      const { prevArticle } = this.$props
      if (prevArticle) {
        $('html, body').animate(
          {
            scrollTop: document.querySelector(
              `.single-article[data-id="${prevArticle._id}"]`
            ).offsetTop
          },
          800
        )
      }
    },
    getTimeAgo,
    handleScroll() {
      if (this.$props.isMainArticle) {
        const perc = this.percentageInView()
        if (perc >= 50) {
          this.$emit('articleReadDone')
        }
      }
      // check if top-sep crossed viewport top
      const topSepTop = this.$refs.topSeparator.getBoundingClientRect().top
      if (topSepTop < 0 && !this.isTopCrossed) {
        this.$emit('topCrossedUp', this.articleData._id)
        this.isTopCrossed = true
      } else if (topSepTop >= 0 && this.isTopCrossed) {
        this.isTopCrossed = false
        this.$emit('topCrossedDown', this.articleData._id)
      }

      const bottomSepTop = this.$refs.bottomSeparator.getBoundingClientRect()
        .top
      if (bottomSepTop < 215 && !this.isBottomCrossed) {
        this.$emit('bottomCrossedUp', this.articleData._id)
        this.isBottomCrossed = true
      } else if (bottomSepTop > 215 && this.isBottomCrossed) {
        this.isBottomCrossed = false
        this.$emit('bottomCrossedDown', this.articleData._id)
      }
    },
    percentageInView() {
      const viewportHeight = window.innerHeight
      const scrollTop = window.pageYOffset
      const articleOffsetTop = this.$refs.article.offsetTop
      const articleHeight = this.$refs.article.offsetHeight
      let perc
      if (articleOffsetTop > scrollTop + viewportHeight) {
        perc = 0
      } else if (articleOffsetTop + articleHeight < scrollTop) {
        perc = 100
      } else {
        const distance = scrollTop + viewportHeight - articleOffsetTop
        const percentage = distance / ((viewportHeight + articleHeight) / 100)
        perc = Math.floor(percentage)
      }
      return perc
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.left-column-container {
  height: 300px !important;
  display: inline-block;
  justify-content: center;
  cursor: pointer;
  position: absolute;
}
.left-column-title {
  font-size: 12px;
  line-height: 24px;
  text-align: left;
  color: #404040;
  font-family: 'Open Sans';
  direction: rtl;
}
.left-column-next {
  display: flex;
  width: 100%;
  justify-content: flex-start;
}
.left-column-next-icon {
  width: 12px;
  height: 15px;
  color: #13cb86;
  font-weight: 100;
  margin-top: 1px;
}
.left-column-next-text {
  color: #404040;
  font-family: 'Open Sans';
  font-weight: 900;
  font-size: 12px;
  margin-left: 5px;
}
.left-column {
  display: flex;
  flex-direction: column;
  max-width: 115px;
  padding-top: 90px;
}
.sticky-right {
  position: fixed !important;
  top: 0;
}
.stick-to-bottom {
  bottom: 135px;
}
.prev-btn-container {
  display: flex;
  justify-content: center;
}
.next-btn-container {
  display: flex;
  justify-content: center;
}

.right-column-container {
  height: 300px !important;
  display: inline-block;
  justify-content: center;
  cursor: pointer;
  position: absolute;
}
.right-column-title {
  font-size: 12px;
  line-height: 24px;
  text-align: right;
  color: #404040;
  font-family: 'Open Sans';
}
.right-column-next {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.right-column-next-icon {
  width: 12px;
  height: 15px;
  color: #13cb86;
  font-weight: 100;
  margin-top: 1px;
}
.right-column-next-text {
  color: #404040;
  font-family: 'Open Sans';
  font-weight: 900;
  font-size: 12px;
  margin-right: 5px;
}
.right-column {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 115px;
  padding-top: 90px;
}
.blur-main-content-img-container {
  width: 100%;
  position: relative;
  height: 350px;
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
.main-content-portrait-img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.main-content-landscape-img {
  height: 100%;
  width: 100%;
  object-fit: fill;
}

.main-blur-img {
  filter: blur(15px);
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
  height: 100%;
  margin-top: 5px;
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
  line-height: 2.5;
}

.publish-date {
  opacity: 0.4;
}

.follow-btn {
  font-size: 18px;
  color: #13cb86;
  padding: 8px 30px;
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
.fb-container p a,
.fb-container p {
  margin: 0px !important;
  align-self: center;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  text-decoration: none;
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
