
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
      <!-- 成像仪对应的三级菜单 -->
      <div class="nav-center">
          <span>{{production}}&ensp;{{showTime}}</span>
      </div>
</template>

<script>
import siblings from '../../../public/js/sibling.js'  // 用于接收兄弟组件的参数
export default {
  data(){
    return {
          production: '卫星FY4探测仪',
          showTime: '2020-04-01 18:00(BTC)',
    }
  },
  created(){

    // 接收兄弟组件参数（其他的三级菜单点击后传的参数）
			siblings.$on('productCont',data => {
        this.production = data;
			})
	},
  methods: {
     
  }
}
</script>

<style scoped>
  
</style>