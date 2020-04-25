<template>
  <div id="app2" >
      <div id="cesiumContainer" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.6)"></div>
      <canvas id="bg_canvas"></canvas>
      <!-- <div id="loadingOverlay"><h1>Loading...</h1></div> -->
      
        
        <!-- 时间播放轴 -->
        <time-bar></time-bar>
        <!-- 导航栏 -->
        <!-- <nav-bar @func='openDrawer'></nav-bar> -->
        <nav-show></nav-show>
        <!-- 侧边栏 -->
        <!-- <side-bar></side-bar> -->
        
        <!-- 产品制作列表 -->
        <product-list :listdrawer.sync="listdrawer" :makedrawer.sync="makedrawer" :filtershow.sync="filtershow" :editdrawer.sync="editdrawer"></product-list>
        <!-- 产品制作 -->
        <make-product :makedrawer.sync="makedrawer" :filtershow.sync="filtershow"></make-product>
        <!-- 产品编辑 -->
        <edit-product :editdrawer.sync="editdrawer" :filtershow.sync="filtershow"></edit-product>
        <!-- 筛选工具条 -->
        <filter-bar :filtershow.sync="filtershow"></filter-bar>

        <!-- 产品演示列表 -->
        <show-list :showlistdrawer.sync="showlistdrawer" :showdrawer.sync="showdrawer"></show-list>
        <!-- 产品演示 -->
        <show-product :showdrawer.sync="showdrawer"></show-product>

        <!-- 气象预报 -->
        <weather-forecast :weatherdrawer="weatherdrawer"></weather-forecast>

        <left-bar :imgPlayRoot = "imgPlayRootOn" class="left-bar"  style="display:none"></left-bar>

        <right-top ref="zm" :zoomObj = "zoom" :viewMap = "mapView" @mapMutipleDown="mapMutipleAllDown" @mapMutipleUp="mapMutipleAllUp"></right-top>

        <map-floor></map-floor>
            
        <menu-head></menu-head>
  </div>
</template>

<script>
import navShow from '@/components/sideTools/navShow'


// 产品制作
import ProductList from '@/components/MakeProduct/ProductList'
import MakeProduct from '@/components/MakeProduct/MakeProduct'
import EditProduct from '@/components/MakeProduct/EditProduct'

// 产品查看
import ShowList from '@/components/ShowProduct/ShowList'
import ShowProduct from '@/components/ShowProduct/ShowProduct'

// 气象
import WeatherForecast from '@/components/Weather/WeatherForecast'

// 工具
import NavBar from '@/components/tool/NavBar'
import SideBar from '@/components/tool/SideBar'
import TimeBar from '@/components/tool/TimeBar'
import FilterBar from '@/components/tool/FilterBar'
import MapFloor from '@/components/tool/mapFloor'

// 侧边栏
import leftBar from '@/components/sideTools/leftBar'
// 右上侧边栏
import RightTop from '@/components/sideTools/rightTop'
//侧边栏顶部
import MenuHead from '@/components/sideTools/menuHead'

import Map from '@/components/mixin/map.js'
import '@/styles/indexPage.scss' 
import '@/styles/dataMode.scss' 
import '@/styles/menuHead.scss'
import '@/styles/layer.scss'
export default {
  name: 'app',
  components:{
      ProductList:ProductList,
      MakeProduct:MakeProduct,
      EditProduct:EditProduct,
      ShowList:ShowList,
      ShowProduct:ShowProduct,
      WeatherForecast:WeatherForecast,
      SideBar:SideBar,
      NavBar:NavBar,
      FilterBar:FilterBar,
      TimeBar:TimeBar,
      navShow: navShow,
      leftBar: leftBar,
      RightTop,
      MenuHead,
      MapFloor
  },
  data(){
      return {
          listdrawer:false,
          makedrawer:false,
          editdrawer:false,
          filtershow:false,
          showlistdrawer:false,
          showdrawer:false,
          weatherdrawer:false,
          isCurrentSimpleStyle:false, //非简体 
          wallShow:true,//背景
          initShow:true,//初始化按钮
          simpleShow:false,//简体菜单
          complexShow:false,//繁体菜单
          hideShow:false,//隐藏按钮
          showShow:false,//显示按钮
          loading:false
        }
  },
  mixins:[Map],
  mounted() {
    
  },
  methods:{
      showRootMenu(){
          
          if(this.isCurrentSimpleStyle){
              this.isSubShow = true
              this.simpleShow = true
              this.hideShow = true
              //console.log('简体形式')
          }else{
              //console.log('其它形式')
              this.isSubShow = !this.isSubShow
              this.complexShow = !this.complexShow
              this.showShow = !this.showShow
              console.log(this.showShow)
          }
      },
      resetDrawer(){
        this.listdrawer = false
        this.makedrawer = false
        this.editdrawer = false
        this.filtershow = false
        this.showlistdrawer = false
        this.showdrawer = false
        this.weatherdrawer = false
      },
      openDrawer(index){
          this.resetDrawer()
          if(index===0){
              this.listdrawer = true
          }else if(index===1){
              this.showlistdrawer = true
          }else if(index===5){
              this.weatherdrawer = true
          }
      }
  },
  computed:{
      simpleStyle(){
          return this.$store.state.system.simple
      }
  },
  watch:{
      simpleStyle:function(newV,v){
          this.isCurrentSimpleStyle = newV
          if(newV){//简体模式
            this.wallShow=true;
            this.initShow=true;
            this.simpleShow=false;
            this.complexShow=false;
            this.hideShow=false;
            this.showShow=false;
          }else{
              this.isSubShow = false
              this.simpleShow = false
              this.hideShow = false
          }
      }
  }
}
</script>
  
<style lang="scss">
    
    
</style>
