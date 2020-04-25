
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <div class="right-top-container">
      <el-container>
          <div class="bar-list bar-size">
              <div class="bar-inner-pane"></div>
              <el-menu mode="horizontal">
                    <div class="bar-sub">
                        <div :class='{"zoomUp_active":isZoomUpVisible}' class="bar-item zoomUp" @click="zoomUpOfMap"></div>
                        <div :class='{"zoomDown_active":isZoomDownVisible}' class="bar-item zoomDown" @click="zoomDownOfMap"></div>
                        <div :class='{"screenAll_active":isScreenAllVisible}' class="bar-item screenAll" @click="screenAll"></div>
                        <div :class='{"lonG_active":isLonGVisible}' class="bar-item lonG" @click="lonG"></div>
                        <div :class='{"z2D_active":is2DVisible}' class="bar-item z2D" @click="z2D"></div>
                        <div :class='{"size_active":isSizeVisible}' class="bar-item size" @click="size"></div>
                        <div :class='{"screenshots_active":isScreenVisible}' class="bar-item screenshots" @click="openDialog"></div>
                        <div :class='{"simple_active":isSimpleVisible}' class="bar-item simple" @click="simple"></div>
                        <div :class='{"position_active":isPositionVisible}' class="bar-item position" @click="position">
                            <transition name="el-zoom-in-top">
                                <position-list v-show="isPositionVisible" @closePosition=closePosition class="transition-box"></position-list>
                            </transition>
                        </div>
                        <div :class='{"fresh_active":isFreshVisible}'  @click="fresh" class="bar-item fresh"></div>
                    </div>
              </el-menu>
          </div>
      </el-container>
  </div>
</template>

<script>
import screenshotsPrint from './mixin/screenshotsPrint'
import PositionList from './position/positionList'
import screenfull from 'screenfull'
export default {
  data(){
    return {
        mutiple:[1,1.8,3,5,9,11],
        curMutipleValue:0, //mutiple下标
        isPositionVisible:false,
        isScreenVisible:false,
        isZoomUpVisible:false,
        isZoomDownVisible:false,
        isScreenAllVisible:false,
        isLonGVisible:false,
        is2DVisible:false,
        isSizeVisible:false,
        isSimpleVisible:false,
        isFreshVisible:false,
        screenSwitchIndex:0
    }
  },
  components:{
      PositionList
  },
  props:['viewMap','zoomObj'],
  mixins:[screenshotsPrint],
  watch:{
      zoomObj:function (val, oldVal) {//alert(1211)
          if(val.index != oldVal.index){
               this.curMutipleValue = val.index
          }
         
      },
  },
  methods: {
      position(){
          this.isPositionVisible= !this.isPositionVisible
         //  this.isPositionVisible=true
        //   this.isScreenVisible=false
        //   this.isZoomUpVisible=false
        //   this.isZoomDownVisible=false
        //   this.isScreenAllVisible=false
        //   this.isLonGVisible=false
        //   this.is2DVisible=false
        //   this.isSizeVisible=false
        //   this.isSimpleVisible=false
        //   this.isFreshVisible=false
      },
      screenAll(){console.log(screenfull,'screenfull')
        //   this.isPositionVisible=false
        //   this.isScreenVisible=false
        //   this.isZoomUpVisible=false
        //   this.isZoomDownVisible=false
        //   this.isScreenAllVisible=true
        //   this.isLonGVisible=false
        //   this.is2DVisible=false
        //   this.isSizeVisible=false
        //   this.isSimpleVisible=false
        //   this.isFreshVisible=false
        if (screenfull.enabled) {
            
            if(this.screenSwitchIndex == 0){
screenfull.request(document.body);
                this.screenSwitchIndex = 1
            }else{
                this.screenSwitchIndex = 0
                screenfull.exit();
            }
        }
      },
      lonG(){
        //   this.isPositionVisible=false
        //   this.isScreenVisible=false
        //   this.isZoomUpVisible=false
        //   this.isZoomDownVisible=false
        //   this.isScreenAllVisible=false
        //   this.isLonGVisible=true
        //   this.is2DVisible=false
        //   this.isSizeVisible=false
        //   this.isSimpleVisible=false
        //   this.isFreshVisible=false
      },
      z2D(){
        //   this.isPositionVisible=false
        //   this.isScreenVisible=false
        //   this.isZoomUpVisible=false
        //   this.isZoomDownVisible=false
        //   this.isScreenAllVisible=false
        //   this.isLonGVisible=false
        //   this.is2DVisible=true
        //   this.isSizeVisible=false
        //   this.isSimpleVisible=false
        //   this.isFreshVisible=false
      },
      size(){
        //   this.isPositionVisible=false
        //   this.isScreenVisible=false
        //   this.isZoomUpVisible=false
        //   this.isZoomDownVisible=false
        //   this.isScreenAllVisible=false
        //   this.isLonGVisible=false
        //   this.is2DVisible=false
        //   this.isSizeVisible=true
        //   this.isSimpleVisible=false
        //   this.isFreshVisible=false
      },
      simple(){
        // this.isPositionVisible=false
        //   this.isScreenVisible=false
        //   this.isZoomUpVisible=false
        //   this.isZoomDownVisible=false
        //   this.isScreenAllVisible=false
        //   this.isLonGVisible=false
        //   this.is2DVisible=false
        //   this.isSizeVisible=false
        //   this.isSimpleVisible=true
        //   this.isFreshVisible=false
          let sp = this.$store.state.system.simple
          this.$store.commit('system/setSimple', !sp)
          //console.log(!sp,'sp')
          //this.isSimpleVisible = !this.isSimpleVisible
      },
      fresh(){
        //   this.isPositionVisible=false
        //   this.isScreenVisible=false
        //   this.isZoomUpVisible=false
        //   this.isZoomDownVisible=false
        //   this.isScreenAllVisible=false
        //   this.isLonGVisible=false
        //   this.is2DVisible=false
        //   this.isSizeVisible=false
        //   this.isSimpleVisible=false
        //   this.isFreshVisible=true
      },
      closePosition(){
        //   this.isPositionVisible =false
        //   this.isScreenVisible=false
        //   this.isZoomUpVisible=false
        //   this.isZoomDownVisible=false
        //   this.isScreenAllVisible=false
        //   this.isLonGVisible=false
        //   this.is2DVisible=false
        //   this.isSizeVisible=false
        //   this.isSimpleVisible=false
        //   this.isFreshVisible=false
      },
      openDialog(){
        //   this.isPositionVisible=false
        //   this.isScreenVisible=true
        //   this.isZoomUpVisible=false
        //   this.isZoomDownVisible=false
        //   this.isScreenAllVisible=false
        //   this.isLonGVisible=false
        //   this.is2DVisible=false
        //   this.isSizeVisible=false
        //   this.isSimpleVisible=false
        //   this.isFreshVisible=false

          this.$confirm('确认后你可以使用鼠标拖拽选取区域，松开后完成', '开始截图', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          lockScroll:false
        }).then(() => {
            // 更新canvas宽高
            var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight
            // 更新canvas宽高
            $("#bg_canvas").attr("width", clientWidth);
            $("#bg_canvas").attr("height", clientHeight);

            $("#bg_canvas").show();
            this.clipScreenshots("bg_canvas");
        }).catch(() => {
                  
        });
      },
      zoomUpOfMap(){
        //   this.isPositionVisible=false
        //   this.isScreenVisible=false
        //   this.isZoomUpVisible=true
        //   this.isZoomDownVisible=false
        //   this.isScreenAllVisible=false
        //   this.isLonGVisible=false
        //   this.is2DVisible=false
        //   this.isSizeVisible=false
        //   this.isSimpleVisible=false
        //   this.isFreshVisible=false

          if(this.curMutipleValue + 1 > this.mutiple.length-1){
              return
          }
          this.curMutipleValue ++
          this.$emit("mapMutipleUp",{value:this.mutiple,index:this.curMutipleValue})
      },
      zoomDownOfMap(){
        //   this.isPositionVisible=false
        //   this.isScreenVisible=false
        //   this.isZoomUpVisible=false
        //   this.isZoomDownVisible=true
        //   this.isScreenAllVisible=false
        //   this.isLonGVisible=false
        //   this.is2DVisible=false
        //   this.isSizeVisible=false
        //   this.isSimpleVisible=false
        //   this.isFreshVisible=false

          if(this.curMutipleValue - 1 < 0){
              return
          }
          --this.curMutipleValue
          this.$emit("mapMutipleDown",{value:this.mutiple,index:this.curMutipleValue})
      }
  }
}
</script>

<style scoped>
  .right-top-container{
      position: absolute;
      right:63px;
      top:22px;
  }
  .right-top-container .bar-list{
      position: relative;
  }
  .bar-size{
      width:400px;
      height: 28px;
  }
  .bar-inner-pane{
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #7A888B;
      opacity: 0.5;
      border-radius: 22px;
  }
  .bar-list .bar-sub{
      position: relative;
      margin: 0;
      padding: 0;
      height: 100%;
  }
  .bar-list .bar-sub .bar-item{
      width:10% ;
      height: 100%;
      float: left;
      line-height: 28px;
      cursor: pointer;
  }
  .screenshots{
      background: url("~@/assets/images/icons/screenshots.png") no-repeat center center;
  }
  .screenshots_active{
      background: url("~@/assets/images/icons/screenshots_blue.png") no-repeat center center;
  }

  .zoomUp{
      background: url("~@/assets/images/icons/zoomUp.png") no-repeat center center;
  }
  .zoomUp_active{
      background: url("~@/assets/images/icons/zoomUp_blue.png") no-repeat center center;
  }

  .zoomDown{
      background: url("~@/assets/images/icons/zoomDown.png") no-repeat center center;
  }
  .zoomDown_active{
      background: url("~@/assets/images/icons/zoomDown_blue.png") no-repeat center center;
  }

  .position{
      background: url("~@/assets/images/icons/position.png") no-repeat center center;
  }
  .position_active{
      background: url("~@/assets/images/icons/position_blue.png") no-repeat center center;
  }

  .screenAll{
      background: url("~@/assets/images/icons/screenAll.png") no-repeat center center;
  }
  .screenAll_active{
      background: url("~@/assets/images/icons/screenAll_blue.png") no-repeat center center;
  }

  .lonG{
      background: url("~@/assets/images/icons/lonG.png") no-repeat center center;
  }
  .lonG_active{
      background: url("~@/assets/images/icons/lonG_blue.png") no-repeat center center;
  }

  .z2D{
      background: url("~@/assets/images/icons/2D.png") no-repeat center center;
  }
  .z2D_active{
      background: url("~@/assets/images/icons/2D_blue.png") no-repeat center center;
  }

  .size{
      background: url("~@/assets/images/icons/size.png") no-repeat center center;
  }
  .size_active{
      background: url("~@/assets/images/icons/size_blue.png") no-repeat center center;
  }

  .simple{
      background: url("~@/assets/images/icons/simple.png") no-repeat center center;
  }
  .simple_active{
      background: url("~@/assets/images/icons/simple_blue.png") no-repeat center center;
  }

  .fresh{
      background: url("~@/assets/images/icons/fresh.png") no-repeat center center;
  }
  .fresh_active{
      background: url("~@/assets/images/icons/fresh_blue.png") no-repeat center center;
  }
  .el-menu{
    height: 100%;
    background-color: transparent;
    border: none;
  }
</style>