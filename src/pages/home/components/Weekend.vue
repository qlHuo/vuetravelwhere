<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
          <li class="item" v-for="item in weekend" :key="item.id">
              <div class="item-img-wapper">
                <img class="item-img" :src="item.imgUrl" />
              </div>
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
            </div>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: ['weekend']
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .title
    background-color: #eee
    line-height: .8rem
    text-indent: .2rem
  .item-img-wapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 37%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    line-height: .6rem
    min-width: 0
    .item-title
        font-size: .36rem
        font-weight: 600
        color: #333
        ellipsis()
    .item-desc
        font-size: .28rem
        color: #999
        ellipsis()
</style>
