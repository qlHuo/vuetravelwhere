<template>
  <div>
    <div class="header">
      <div class="header-left">
        <div class="iconfont">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span> 请输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{city}}
          <span class="iconfont">&#xe652;</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  line-height: $headerHeight
  display: flex
  background-color: $bgColor
  color: #fff
  .header-left
    width: 0.64rem
    float: left
    div
      text-align: center
      font-size: 0.36rem
  .header-input
    flex: 1
    line-height: 0.64rem
    height: 0.64rem
    margin: 0.11rem 0 0.11rem 0.1rem
    background-color: #fff
    color: #ccc
    border-radius: 0.1rem
    padding-left: 0.15rem
  .header-right
    width: 1.24rem
    text-align: center
    color: #fff
    span
      font-size: 0.24rem
</style>
