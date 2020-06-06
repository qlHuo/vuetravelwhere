<template>
  <div class="warpper">
    <swiper :options="swiperOptions" style="touch-action: none;" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
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
      }
    }
  },
  // props: {
  //   list: Array
  // }
  props: ['list'],
  computed: {
    showSwiper () {
      return this.list.length
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
