<template>
    <div class="icons">
      <swiper :options='swiperOptions' style="touch-action: none;">
        <swiper-slide v-for="(page,index) in pages" :key="index">
          <div class="icon" v-for="item in page" :key="item.id">
            <img class="icon-img" :src="item.imgUrl">
            <p>{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>

export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  props: ['iconsList'],
  computed: {
    // icons 分页
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
    .icon
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      text-align center
      color: $fontColor
      .icon-img
        width: 70%
        margin: .16rem 0 .12rem
      p
        ellipsis()

</style>
