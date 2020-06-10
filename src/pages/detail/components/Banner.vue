<template>
  <div>
    <div class="banner" @click='hanleBannerClick'>
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
        <div class="banner-info">
          <div class="title">
            大连圣亚海洋世界(AAAA景区)
          </div>
          <div class="number"><span class="iconfont banner-icon">&#xe638;</span> 39</div>
        </div>
    </div>
    <common-gallery :imgs='imgs' v-show="showGallery" @close='handleGalleryClose'></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg', 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg']
    }
  },
  components: {
    CommonGallery
  },
  methods: {
    hanleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang='stylus' scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      right 0
      left 0
      bottom 0
      line-height .6rem
      height .6rem
      color #fff
      margin 0 .1rem
      background linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .title
        flex 1
      .number
        margin-top .1rem
        padding 0 .4rem
        height  .4rem
        line-height .4rem
        border-radius .2rem
        background-color rgba(0, 0, 0, .6)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
