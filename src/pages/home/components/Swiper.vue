<template>
  <div class="warpper">
    <swiper :options="swiperOptions" style="touch-action: none;">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img
          :src="item.imgUrl"
          class="swiper-img"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://gitee.com/aurorapic/BlogPic/raw/master/img/swiper1.jpg'
      },
      {
        id: '0002',
        imgUrl: 'https://gitee.com/aurorapic/BlogPic/raw/master/img/swiper2.jpg'
      },
      {
        id: '0003',
        imgUrl: 'https://gitee.com/aurorapic/BlogPic/raw/master/img/swiper3.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .warpper >>> .swiper-pagination-bullet-active
    background-color: #fff
  .warpper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 30.4%
    .swiper-img
      width: 100%

</style>
