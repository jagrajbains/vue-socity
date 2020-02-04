<template>
  <div ref="article" class="single-article">
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
        <div>
          <div>Share on facebook</div>
          <div>Bookmark this article</div>
        </div>
        <!-- Next article -->
        <div :id="articleData._id" class="divider">Next article</div>
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
  props: {
    article: {
      type: Object,
      required: true
    },
    isMainArticle: {
      type: Boolean,
      default: false
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
  mounted() {
    if (this.$props.isMainArticle) {
      window.addEventListener('scroll', this.handleScroll)
    }
    const imagesArr = document.getElementsByClassName(
      'main-content-img-container'
    )
    for (let i = 0; i < imagesArr.length; i++) {
      const element = imagesArr[i]
      if (
        element.children[0].naturalWidth > element.children[0].naturalHeight
      ) {
        element.children[0].classList.add('main-content-landscape-img')
      } else {
        element.children[0].classList.add('main-content-portrait-img')
      }
    }
  },
  methods: {
    getTimeAgo,
    handleScroll() {
      const perc = this.percentageInView()
      if (perc >= 50) {
        this.$emit('articleReadDone')
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
  border-bottom: 1px solid #ddd;
}
</style>
