
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable */ 
<template>
      <div class="right-container KFeight zsd">
          <ul class="right-wrap">
              <li class="right-menu" v-for="(item,index) in KFList" :key="index" :class="{'menuBg':clicked == index}" @click="getMenu(index, item.title)"> 
                  <span class="menuCont">
                      <div class="txt">{{item.title}}</div> <div v-if="item.showTab" class="txt-tab txt-tab2">30min</div><div v-if="item.showTab" class="txt-tab">1h</div>
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
          // 雷达
          KFList:[
              {
                title:'组合反射率',
                showTab:false
              },
              {
                title:'降水估计',
                showTab:true
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
          $(".txt-tab").click(function(){
            $(this).parent().find(".txt-tab").removeClass("active");
            $(this).addClass("active");
          });
      })
  },
  methods: {
    imgPlayOn(countIndex){
        if(this.imgPlay){
            this.imgPlay(countIndex,41)
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