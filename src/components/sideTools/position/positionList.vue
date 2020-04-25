<template>
    <el-container class="p-wrap-ot p-wrap-ot02" >
        <div class="backWall"></div>
        <el-menu mode="vertical">
            <el-menu-item index="1" > 
                <i class="el-icon-menu"></i>
                <img v-if="!w_visble" src="~@/assets/images/icons/we.png">
                <img v-else src="~@/assets/images/icons/we_bl.png">
                <span :class='{"text-s-active":w_visble}' slot="title" v-on:click.stop="allWheel(1)">全圆盘</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span :class='{"text-s-active":c_visble}' class="bar-icon-sub">C</span>
                <span  :class='{"text-s-active":c_visble}' slot="title" v-on:click.stop="allWheel(2)">中国</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span :class='{"text-s-active":j_visble}' class="bar-icon-sub">J</span>
                <span  :class='{"text-s-active":j_visble}' slot="title" v-on:click.stop="allWheel(3)">江苏</span>
            </el-menu-item>
        </el-menu>
    </el-container>
</template>
<script>
    export default {
        data(){
            return {
                mutiple:[1,1.8,3,5,9,11],
                curMutipleValue:0, //mutiple下标
                w_visble:false,
                c_visble:false,
                j_visble:false
            }
        },
        methods:{
            allWheel(visble_index){
                if(visble_index == 1){
                    this.w_visble = true
                    this.c_visble = false
                    this.j_visble = false
                }else if(visble_index == 2){
                    this.w_visble = false
                    this.c_visble = true
                    this.j_visble = false
                }else{
                    this.w_visble = false
                    this.c_visble = false
                    this.j_visble = true
                }
                
                this.$emit("closePosition")
                
            }
        }
    }
</script>
<style scoped lang="scss">
    ul.el-menu--horizontal{
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
  }
  .p-wrap-ot{
      padding: 2px;
  }
  .p-wrap-ot02{
      position: absolute;
      margin: 0;
      top: 30px;
      padding: 0 10px;
     .backWall{
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        opacity: 0.5;
        z-index: 0;
        border-radius: 8px;
     }
  }
  .el-menu{
      background-color:transparent;
      border: none !important;
  }
  .el-menu > li,.el-menu--horizontal .el-menu .el-menu-item{
      padding: 0 !important;
      background-color:transparent;
      color:#fff;
      height: 26px;
      line-height: 26px;
          text-align: left;
  }
  .el-menu-item [class^="el-icon-"]{
      width: 0 !important;
      margin-right:0;
  }
  .el-menu-item{
      font-size: 12px;
      background-color:transparent;
  }
  #app .el-menu-item i{
      display: none;
  }
  .bar-list .bar-icon-sub{
      color: #fff;
      padding-right: 5px;
  }
  
</style>