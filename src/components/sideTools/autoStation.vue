
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable */ 
<template>
      <!-- 成像仪对应的三级菜单 -->
      <div class="right-container KFeight">
          <ul class="right-wrap">
              <li class="right-menu" v-for="(item,index) in KFList" :key="index" :class="{'menuBg':clicked == index}" @click="getMenu(index, item.title)"> 
                  <span class="menuCont">
                      <div class="txt">{{item.title}}</div> <div v-if="item.showTab" class="txt-tab txt-tab2">填值</div><div v-if="item.showTab" class="txt-tab">色斑</div>
                  </span>  
              </li> 
          </ul>
      </div>
</template>

<script>
import $ from 'jquery'
import '@/styles/tabText.scss'
export default {
  data(){
    return {
          clicked: -1,
          // 自动站
          KFList:[
              {
                title:'地面填图',
                showTab:false
              },
              {
                title:'温度',
                showTab:true
              },
              {
                title:'气压',
                showTab:false
              },
              {
                title:'相对湿度',
                showTab:false
              },
              {
                title:'风向风速',
                showTab:false
              },
              {
                title:'能见度',
                showTab:false
              }
          ]

    }
  },
  props:{
    imgPlayAuto:{
      type:Function,
      default:null
    }
  },
  mounted(){
      //this.imgPlayOn(6)
      this.$nextTick(()=>{
          $(".txt-tab").click(function(){
            $(this).parent().find(".txt-tab").removeClass("active");
            $(this).addClass("active");
          });
      })
  },
  methods: {
    imgPlayOn(countIndex){
        if(this.imgPlayAuto){
            this.imgPlayAuto(countIndex,3)
        }
    },
     getMenu(index,con){
        this.clicked = index;
        this.imgPlayOn(index)
      }
  }
}
</script>

<style scoped>
  
</style>