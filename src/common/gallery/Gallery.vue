<template>
    <div class="container" @click="handleGalleryClick">
      <div class="warpper">
        <swiper :options='swiperOptions' style="touch-action: none;" >
          <swiper-slide v-for="(item,index) in imgs" :key="index">
            <img
              :src="item"
              class="gallery-img"
            />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 99
    background-color #000
    .warpper
      // overflow hidden
      height 0
      width 100%
      padding-bottom 100%
      // background-color #fff
      .gallery-img
        width: 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
