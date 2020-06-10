<template>
    <div>
      <div class="item" v-for="(item,index) in list" :key="index">
        <div class="item-title">
          <span class="item-title-icon"></span>
          {{item.title}}
        </div>
        <div class="item-children" v-if="item.children">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: ['list']
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position relative
    left .06rem
    top .08rem
    display inline-block
    width .36rem
    height .36rem
    background url(https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png)
    margin-right .1rem
    background-size .4rem .3rem
  .item-title
    line-height .8rem
    font-size .32rem
    padding .2rem
  .item-children
    padding 0 .3rem
</style>
