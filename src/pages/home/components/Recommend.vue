<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
          <li class="item" v-for="item in recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl" />
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1503/d5/d5e74437b7fd4e73.water.jpg_228x168_75e44d7d.jpg',
        title: 'Hello Kitty主题公园',
        desc: 'Hello Kitty主题公园等你来玩儿'
      },
      {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1503/d5/d5e74437b7fd4e73.water.jpg_228x168_75e44d7d.jpg',
        title: 'Hello Kitty主题公园',
        desc: 'Hello Kitty主题公园等你来玩儿'
      },
      {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1503/d5/d5e74437b7fd4e73.water.jpg_228x168_75e44d7d.jpg',
        title: 'Hello Kitty主题公园',
        desc: 'Hello Kitty主题公园等你来玩儿'
      },
      {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1503/d5/d5e74437b7fd4e73.water.jpg_228x168_75e44d7d.jpg',
        title: 'Hello Kitty主题公园',
        desc: 'Hello Kitty主题公园等你来玩儿'
      },
      {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1503/d5/d5e74437b7fd4e73.water.jpg_228x168_75e44d7d.jpg',
        title: 'Hello Kitty主题公园',
        desc: 'Hello Kitty主题公园等你来玩儿'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .title
    margin-top: .2rem
    background-color: #eee
    line-height: .8rem
    text-indent: .2rem
  .item
    display: flex
    height: 2rem
    .item-img
      height: 1.8rem
      width: 1.8rem
      padding: .1rem
    .item-info
      flex: 1
      padding-top: .1rem
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
      .item-button
        background-color: #ff9300
        border-radius: .1rem
        color: #fff
        padding: 0 .1rem
</style>
