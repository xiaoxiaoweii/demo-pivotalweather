
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
      <!-- 闪电仪对应的三级菜单 -->
      <div class="right-container FY-lightning">
        <div class="right-container-tab">
              <div class="right-container-tab-wrap">
                  <div class="right-container-tab-pane"></div>
                  <div class="right-table">
                      <div class="r-1 tab-item active" style="width:50%">闪电产品</div>
                        <div class="r-3 tab-item" style="width:50%">地基对比</div>
                  </div>
              </div>
          </div>
          <ul class="right-wrap">
              <li class="right-menu" v-for="(item,index) in lightningList" :key="index" :class="{'menuBg':clicked == index}" @click="getMenu(index, item.title)"> 
                  <span class="menuCont">
                      {{item.title}}
                  </span>  
              </li> 
          </ul>
      </div>
</template>

<script>
import "@/styles/leftMenuTab.scss"
import siblings from '../../../public/js/sibling.js'  //  用于接收需要传递给兄弟组件的参数
import Tab from './mixin/tab'
export default {
  data(){
    return {
          clicked: -1,

          // 闪点仪的内容清单
          lightningList:[
              {
                title:'星载闪电检测',
              },
              {
                title:'温度垂直廓线 | 三维视图',
              }
          ]

    }
  },
  mixins:[Tab],
  methods: {
     getMenu(index,con){
   
        this.flightningCont = con; 
        this.clicked = index;
        con = '风云四号' + con
        this.$emit('ToLightning',con);  // 兄弟组件传参  用不到 可删除
        siblings.$emit('productCont',con);  // 将参数传给兄弟组件
        
      }
  }
}
</script>

<style scoped>
  
</style>