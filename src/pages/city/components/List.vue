<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-warpper">
              <div class="button-item">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-warpper">
              <div class="button-item">北京</div>
            </div>
            <div class="button-warpper">
              <div class="button-item">北京</div>
            </div>
            <div class="button-warpper">
              <div class="button-item">北京</div>
            </div>
            <div class="button-warpper">
              <div class="button-item">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
            <div class="item-content">阿拉尔</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      background-color #eee
      padding 0.2rem
      line-height .24rem
      font-size .32rem
    .button-list
      padding 0.1rem .6rem .1rem .1rem
      overflow hidden
      .button-warpper
        float left
        width 33.3%
        .button-item
          border .02rem solid #ccc
          text-align center
          border-radius .1rem
          padding .2rem 0
          margin .1rem
    .item-content
      line-height .54rem
      color #333
      padding .2rem
      border-bottom .02rem solid #ccc
</style>
