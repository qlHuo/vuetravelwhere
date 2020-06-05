<template>
    <div class="icons">
      <swiper :options='swiperOptions' style="touch-action: none;">
        <swiper-slide v-for="(page,index) in pages" :key="index">
          <div class="icon" v-for="item in page" :key="item.id">
            <img class="icon-img" :src="item.imgUrl">
            <p>{{item.imgDesc}}</p>
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
      },
      iconsList: [
        {
          id: '0001',
          imgUrl: 'https://gitee.com/aurorapic/BlogPic/raw/master/img/piao.png',
          imgDesc: '景点门票'
        },
        {
          id: '0002',
          imgUrl: 'https://gitee.com/aurorapic/BlogPic/raw/master/img/hotel.png',
          imgDesc: '酒店'
        },
        {
          id: '0003',
          imgUrl: 'https://gitee.com/aurorapic/BlogPic/raw/master/img/train.png',
          imgDesc: '火车票'
        },
        {
          id: '0004',
          imgUrl: 'https://gitee.com/aurorapic/BlogPic/raw/master/img/flight.png',
          imgDesc: '机票'
        },
        {
          id: '0005',
          imgUrl: 'https://gitee.com/aurorapic/BlogPic/raw/master/img/package.png',
          imgDesc: '度假'
        },
        {
          id: '0006',
          imgUrl: 'https://gitee.com/aurorapic/BlogPic/raw/master/img/piao.png',
          imgDesc: '景点门票'
        },
        {
          id: '0007',
          imgUrl: 'https://gitee.com/aurorapic/BlogPic/raw/master/img/hotel.png',
          imgDesc: '酒店'
        },
        {
          id: '0008',
          imgUrl: 'https://gitee.com/aurorapic/BlogPic/raw/master/img/train.png',
          imgDesc: '火车票'
        },
        {
          id: '0009',
          imgUrl: 'https://gitee.com/aurorapic/BlogPic/raw/master/img/train.png',
          imgDesc: '火车票'
        },
        {
          id: '0010',
          imgUrl: 'https://gitee.com/aurorapic/BlogPic/raw/master/img/piao.png',
          imgDesc: '景点门票'
        }
      ]
    }
  },
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
