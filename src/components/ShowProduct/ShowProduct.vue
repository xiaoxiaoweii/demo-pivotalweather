<template>
  <div>
    <el-drawer
        :visible.sync="showdrawer"
        :before-close="handleClose"
        :modal="modalVal"
        :wrapperClosable="modalVal"
        direction="ltr"
        size="400px">
        <div slot="title">
            <span  style="float:left;">产品查看</span>
        </div>
         <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>船只列表</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>备注信息</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>天气信息</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'ShowProduct',
  props: {
    showdrawer: Boolean
  },
  data(){
    return {
      modalVal:false,
            productList:[
                {
                    line:'xx港-yy港',
                    time1:'2020/01/10 08:15:10',
                    time2:'2020/01/11 09:11:12',
                    data1:'1d1h',
                    data2:'2.95.33nm'
                },
                {
                    line:'xx港-yy港',
                    time1:'2020/01/10 08:15:10',
                    time2:'2020/01/11 09:11:12',
                    data1:'1d1h',
                    data2:'2.95.33nm'
                }
            ]
    }
  },
  methods:{
    handleClose(){
      this.$emit('update:showdrawer', false);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-drawer__wrapper {
  width:400px;
}
.el-card {
  width:96%;
  height:32%;
  margin:0 auto;
  margin-bottom:1%;
}
</style>
