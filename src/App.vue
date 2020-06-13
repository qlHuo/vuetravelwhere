<template>
  <div id="app">
    <!-- 路由占位符 显示的是当前路由地址对应的内容 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>