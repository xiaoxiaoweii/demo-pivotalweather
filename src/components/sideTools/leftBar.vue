
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <div class="left-container" :class='{"special":!getSimple}'>
      <div class="op"></div>
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title" class="hoverShow" selected>
                <i class="iconfont iconweixingtu"></i>
                <span>风云四号</span>
              </template>
                <el-menu-item class="second-menu FY" index="1-1">
                  <i class="iconfont iconweixing icon-rotate"></i>
                  <span>成像仪</span>
                  <fy-imager class="commonThird"></fy-imager>
                </el-menu-item> 
                <el-menu-item class="second-menu FY" index="1-2">
                  <span>探测仪</span>
                  <fy-detector class="commonThird"></fy-detector>
                </el-menu-item> 
                <el-menu-item class="second-menu FY" index="1-3" >
                  <span>闪电仪</span>  
                  <fy-lightning v-on:ToLightning="getLightning" class="commonThird"></fy-lightning>
                </el-menu-item>   
            </el-submenu>
            <el-submenu index="2">
              <template slot="title" class="hoverShow" selected>
                <i class="iconfont iconweixingtu"></i>
                <span>葵花八号</span>
              </template>
              <el-menu-item class="second-menu FY" index="1-1">
                  <i class="iconfont iconweixing icon-rotate"></i>
                  <span>成像仪</span>
                  <k-h-eight class="commonThird"></k-h-eight>
              </el-menu-item> 
            </el-submenu>  
            <el-menu-item index="3" class="hoverShow">
              <i class="iconfont iconleida"></i>
              <span slot="title">雷&emsp;&emsp;达</span>
              <radar  :imgPlay = "imgPlay"  class="commonThird"></radar>
            </el-menu-item>
            <el-menu-item index="4" class="hoverShow">
              <i class="el-icon-s-data"></i>
              <span slot="title">数值模式</span>
              <vdatay-mody  class="commonThird"></vdatay-mody>
            </el-menu-item>
            <el-menu-item index="5" class="hoverShow">
              <i class="iconfont iconzhandian"></i>
              <span slot="title">自&ensp;动&ensp;站</span>
              <auto-station :imgPlayAuto = "imgPlay"  class="commonThird"></auto-station>
            </el-menu-item>
            <el-menu-item index="6" class="hoverShow">
              <i class="iconfont iconleida3"></i>
              <span slot="title">探空雷达</span>
              <search-sky-radar  :imgPlay = "imgPlay"  class="commonThird"></search-sky-radar>
            </el-menu-item>
            <el-menu-item index="7" class="hoverShow">
              <i class="iconfont iconweibofushe"></i>
              <span slot="title">微波辐射</span>
              <weibo-radiation  :imgPlay = "imgPlay"  class="commonThird"></weibo-radiation>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>

  </div>
</template>

<script>
import '../../assets/font_icon/iconfont.css'  // 左侧功能栏用到的图标样式
// 侧边栏
import fyImager from '@/components/sideTools/FYImager'    //  风云四号成像仪的三级菜单
import fyDetector from '@/components/sideTools/FYDetector' //  风云四号探测仪的三级菜单
import fyLightning from '@/components/sideTools/FYLightning'  //  风云四号闪点仪的三级菜单

import KHEight from '@/components/sideTools/KHEight' //  葵花8号的三级菜单
import SearchSkyRadar from '@/components/sideTools/searchSkyRadar' //  探空雷达菜单
import WeiboRadiation from '@/components/sideTools/weiboRadiation' //  微波辐射菜单
import Radar from '@/components/sideTools/radar' //  雷达菜单
import VdatayMody from '@/components/sideTools/vdatayMody' //  数值模式
import AutoStation from '@/components/sideTools/autoStation' 
import MenuCtrl from './mixin/leftMenuCtrl'
export default {
  components:{
      fyImager: fyImager,
      fyDetector: fyDetector,
      fyLightning: fyLightning,
      KHEight: KHEight,
      SearchSkyRadar:SearchSkyRadar,
      AutoStation,
      Radar,
      VdatayMody,
      WeiboRadiation
  },
  data(){
    return {

          lightningCont: null, // 接收子组件闪点仪的三级菜单传过来的内容
     
    }
  },
  mixins:[MenuCtrl],
  props:{
    imgPlayRoot:{
      type:Function,
      default:null
    }
  },
  methods: {
      imgPlay(countIndex,flag){
        if(this.imgPlayRoot){
          this.imgPlayRoot(countIndex,flag)
        }
      },
      handleOpen(key, keyPath) {
        
      },
      handleClose(key, keyPath) {
        
      },
      getLightning: function(data){
        this.lightningCont =  data
        console.log(data,'闪点仪点击后传过来的参数');

        this.$emit('toNavShow',data);
      }


  },
  computed:{
    getSimple(){
      return this.$store.state.system.simple
    }
  }
}
</script>

<style scoped>
  /*
  #app .left-container .right-container{
    position: absolute !important;
  }*/
  #app .left-container .el-menu{
    background-color: transparent !important;
  }
  .op{
        background-color: #7A888B !important;
    opacity: 0.6 !important;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
</style>