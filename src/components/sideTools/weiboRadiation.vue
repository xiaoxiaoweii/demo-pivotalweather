
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable */ 
<template>
      <!-- 成像仪对应的三级菜单 -->
      <div class="right-container KFeight">
          <ul class="right-wrap">
              <li class="right-menu ttz" v-for="(item,index) in KFList" :key="index" :class="{'menuBg':clicked == index,'menu2':item.showBg}" @click="getMenu(index, item.title)"> 
                  <span class="menuCont " :class="{'menuCount2':item.showBg}">
                      <div  :class="{'imgRadar':!item.showStationList,'imgRadar-a':!item.showStationList}"></div>{{item.title}}
                      <div v-if="item.showStationList" class="stl">
                          <span class="stl-title active"><div class="imgRadar imgRadar-b"></div>&nbsp;&nbsp;站点列表</span>
                          <ul>
                            <li class="active">南京 - 58100</li>
                            <li>苏州 - 58101</li>
                            <li>无锡 - 58102</li>
                            <li>徐州 - 58103</li>
                          </ul>
                      </div>
                  </span>  
              </li> 
          </ul>
      </div>
</template>

<script>
import '@/styles/radar.scss'
export default {
  data(){
    return {
          clicked: -1,
          // 探空雷达
          KFList:[
              {
                title:'站点分布',
                showStationList:false,
                showBg:false
              },
              {
                title:'',
                showStationList:true,
                showBg:true
              }
          ]

    }
  },
  props:{
    imgPlay:{
      type:Function,
      default:null
    }
  },
  mounted(){
      //this.imgPlayOn(6)
      this.$nextTick(()=>{
        $(".stl ul li").click(function(){
            $(this).parent().find("li").removeClass("active")
            $(this).addClass("active")
            $(this).parent().parent().find(".stl-title").addClass("active")
            $(this).parents(".right-menu").parent().find(">li").removeClass("menuBg")
        });
        $(".ttz").click(function(){
          if($(this).find(".stl").length){

          }else{
            $(this).parent().find(">li").removeClass("menuBg")
            $(this).addClass("menuBg")
            $(this).parent().find(".stl-title").removeClass("active")
            $(this).parent().find("li").removeClass("active")
          }
        })
      })
  },
  methods: {
    imgPlayOn(countIndex){
        if(this.imgPlay){
            this.imgPlay(countIndex,5)
        }
    },
     getMenu(index,con){
       if(index == 1){
         return
       }
        this.clicked = index;
        this.imgPlayOn(index)
      }
  }
}
</script>

<style scoped>
  
</style>