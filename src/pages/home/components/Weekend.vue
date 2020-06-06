<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
          <li class="item" v-for="item in recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/vs_ceph_vs_tts/7c76f5a6-ed53-4e3f-8ca3-fc825627e141.jpg_r_640x420x95_eaad337f.jpg',
        title: 'Hello Kitty主题公园',
        desc: 'Hello Kitty主题公园等你来玩儿'
      },
      {
        id: '0002',
        imgUrl: 'https://img1.qunarzz.com/vs_ceph_vs_tts/7c76f5a6-ed53-4e3f-8ca3-fc825627e141.jpg_r_640x420x95_eaad337f.jpg',
        title: 'Hello Kitty主题公园',
        desc: 'Hello Kitty主题公园等你来玩儿'
      },
      {
        id: '0003',
        imgUrl: 'https://img1.qunarzz.com/vs_ceph_vs_tts/7c76f5a6-ed53-4e3f-8ca3-fc825627e141.jpg_r_640x420x95_eaad337f.jpg',
        title: 'Hello Kitty主题公园',
        desc: 'Hello Kitty主题公园等你来玩儿'
      },
      {
        id: '0004',
        imgUrl: 'https://img1.qunarzz.com/vs_ceph_vs_tts/7c76f5a6-ed53-4e3f-8ca3-fc825627e141.jpg_r_640x420x95_eaad337f.jpg',
        title: 'Hello Kitty主题公园',
        desc: 'Hello Kitty主题公园等你来玩儿'
      },
      {
        id: '0005',
        imgUrl: 'https://img1.qunarzz.com/vs_ceph_vs_tts/7c76f5a6-ed53-4e3f-8ca3-fc825627e141.jpg_r_640x420x95_eaad337f.jpg',
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
  .item-img-wapper
    overflow: hidden
    width: 100%
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
