<template>
    <div id="navbar">
          <ul>
              <li v-for="(item,index) in navList" :key="index" @click="getIndex(index)">
                  <div class="iconfontBox">
                      <i :class="item.icon"></i>
                  </div>
                  <div>{{item.title}}</div>
              </li>
          </ul>
      </div>  
</template>

<script>
export default {
  name: 'NavBar',
  props: {
  },
  data(){
    return{
        msg:null,
      navList:[
                {
                    title:'产品制作',
                    icon:'iconfont icon-dianying'
                },
                {
                    title:'产品演示',
                    icon:'iconfont icon-ai239'
                },
                {
                    title:'航线管理',
                    icon:'iconfont icon-hangxian'
                },
                {
                    title:'台风轨迹',
                    icon:'iconfont icon-winfo-icon-guiji'
                },
                {
                    title:'卫星云图',
                    icon:'iconfont icon-weixing'
                },
                {
                    title:'气象预报',
                    icon:'iconfont icon-tianqiyubao'
                },
                {
                    title:'天气符号',
                    icon:'iconfont icon-tubiaozhizuomobanyihuifu-'
                },
                {
                    title:'雷达',
                    icon:'iconfont icon-leida'
                }
            ]
    }
  },
  methods:{
      getIndex(index){
          this.msg = index
          this.$emit('func',this.msg)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
