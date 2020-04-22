<template>
  <div id="app2">
    <div id="cesiumContainer"></div>
    <canvas id="bg_canvas"></canvas>
    <left-bar :imgPlayRoot="imgPlayRootOn"></left-bar>
  </div>
</template>

<script>

// 侧边栏
import leftBar from '@/components/sideTools/leftBar'

import Map from '@/components/mixin/map.js'
import '@/styles/indexPage.scss'
export default {
  name: 'app',
  components: {
    leftBar
  },
  mixins: [Map]
}
</script>
<style lang="scss">
</style>
