
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
      <!-- 成像仪对应的三级菜单 -->
      <div class="right-container FY-detector">
          <div class="right-container-tab">
              <div class="right-container-tab-wrap">
                  <div class="right-container-tab-pane"></div>
                  <div class="right-table">
                      <div class="r-1 tab-item active">2D</div>
                        <div class="r-2 tab-item">3D</div>
                        <div class="r-3 tab-item">垂直廓线</div>
                  </div>
              </div>
          </div>
          <ul class="right-wrap">
              <li class="right-menu" v-for="(item,index) in detectorList" :key="index" :class="{'menuBg':clicked == index}" @click="getMenu(index, item.title)"> 
                  <span class="menuCont">
                      {{item.title}}
                  </span>  
              </li> 
          </ul>
      </div>
</template>

<script>
import "@/styles/leftMenuTab.scss"
export default {
  data(){
    return {
          clicked: -1,
          // 探测仪的内容清单
          detectorList:[
              {
                title:'任意点选择',
              },
              {
                title:'探空对比',
              },
              {
                title:'微波对比',
              }
          ]

    }
  },
  methods: {
     getMenu(index,con){
        console.log(index,con,'index');
        this.clicked = index;
      }
  }
}
</script>

<style scoped>
    
</style>