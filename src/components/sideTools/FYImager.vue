/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
      <!-- 成像仪对应的三级菜单 -->
      <div class="right-container">
          <ul class="right-wrap">
              <li class="right-menu" v-for="(item,index) in imagerList" :key="index" :class="{'menuBg':clicked == index}" @click="getMenu(index, item.title)"> 
                  <span class="menuCont">
                      {{item.title}}
                  </span>  
              </li> 
          </ul>
      </div>
</template>

<script>
export default {
  data(){
    return {
          clicked: -1,
          // 成像仪的内容清单
          imagerList:[
              {
                title:'通道01：0.47um可见光'
              },
              {
                title:'通道02：0.65um可见光'
              },
              {
                title:'通道03：0.83um近红外'
              },
              {
                title:'通道04：0.37um短波红外'
              },
              {
                title:'通道05：1.61um短波红外'
              },
              {
                title:'通道06：2.22um短波红外'
              },
              {
                title:'通道07：3.72um中波红外 | 高'
              },
              {
                title:'通道08：3.72um中波红外 | 低'
              },
              {
                title:'通道09：6.25um高层水汽'
              },
              {
                title:'通道10：9.1um中层水汽'
              },
              {
                title:'通道11：8.5um长波红外'
              },
              {
                title:'通道12：10.8um长波红外'
              },
              {
                title:'通道13：12um长波红外'
              },
              {
                title:'通道14：13.5um长波红外'
              },
              {
                title:'自然色（0.87um）'
              },
              {
                title:'真彩色'
              },
              {
                title:'雾/雪'
              },
              {
                title:'强风暴'
              },
              {
                title:'对流云'
              },
              {
                title:'沙尘'
              },
              {
                title:'气团'
              },
              {
                title:'火山灰'
              },
              {
                title:'白天微物理特征'
              },
              {
                title:'夜间微物理特征'
              },
              {
                title:'白天对流风暴'
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