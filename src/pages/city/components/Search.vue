<template>
    <div class="search">
      <input type="search" placeholder="输入城市名称或者拼音" class="search-input">
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    background-color $bgColor
    padding 0 .1rem
    .search-input
      box-sizing border-box
      height .64rem
      line-height .64rem
      padding 0 .1rem
      width 100%
      text-align center
      border-radius .1rem
      color #333
</style>
