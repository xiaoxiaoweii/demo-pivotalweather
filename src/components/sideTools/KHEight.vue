
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable */ 
<template>
      <!-- 成像仪对应的三级菜单 -->
      <div class="right-container KFeight">
          <ul class="right-wrap">
              <li class="right-menu" v-for="(item,index) in KFList" :key="index" :class="{'menuBg':clicked == index}" @click="getMenu(index, item.title)"> 
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
          // 葵花八号的内容清单
          KFList:[
              {
                title:'通道01：0.43-0.48um RGB',
              },
              {
                title:'通道02：0.50-0.52um RGB',
              },
              {
                title:'通道03：0.63-0.66um RGB',
              },
              {
                title:'通道04：0.85-0.87um',
              },
              {
                title:'通道05：1.60-1.62um',
              },
              {
                title:'通道06：2.25-2.27um',
              },
              {
                title:'通道07：3.74-3.96um',
              },
              {
                title:'通道08：6.06-6.43um 水汽',
              },
              {
                title:'通道09：6.89-7.01um 水汽',
              },
              {
                title:'通道10：7.26-7.43um 水汽',
              },
              {
                title:'通道11：8.44-8.76um SO2',
              },
              {
                title:'通道12：9.54-9.72um O3',
              },
              {
                title:'通道13：10.3-10.6  大气窗区',
              },
              {
                title:'通道14：11.1-11.3  大气窗区',
              },
              {
                title:'通道15：12.2-12.5  大气窗区',
              },
              {
                title:'通道16：13.2-13.4 CO2',
              },
              {
                title:'自然色（0.87um）',
              },
              {
                title:'真彩色',
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