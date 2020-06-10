<template>
    <div>
      <router-link tag="div" to='/' class="header-abs" v-show="showAbs">
        <div class="iconfont header-abs-back">&#xe624;</div>
      </router-link>
      <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
        <router-link to="/">
          <div class="iconfont header-fixed-back">&#xe624;</div>
        </router-link>
        城市选择
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    // 由于是为window绑定的事件，所以这个事件会在页面的任何地方都能使用，因此需要解绑事件
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      // console.log('scroll')
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
      // console.log(document.documentElement.scrollTop)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    text-align center
    background rgba(0,0,0,.7)
    .header-abs-back
      color #fff
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background-color $bgColor
    font-size .32rem
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      color #fff
</style>
