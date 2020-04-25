<template>
  <div>
    <el-drawer
        :visible.sync="weatherdrawer"
        direction="ltr">
        <div slot="title">
            <span  style="float:left;">预报列表</span>
            <el-button type="primary" size="mini" style="float:right;" @click="openForecastForm">制作</el-button>
        </div>
         <ul class="drawer-list forecast-list"  style="overflow:auto">
            <li v-for="(item,index) in productList" :key="index" class="drawer-list-item">
                <el-row>
                    <el-col :span="12">
                      <div>2020/3/29</div>
                    </el-col>
                    <el-col :span="12">
                        <el-button type="info" size="mini">查看</el-button>
                        <el-button type="info" size="mini">编辑</el-button>
                        <el-button type="info" size="mini">导出</el-button>
                    </el-col>
                </el-row>
            </li>
         </ul>
        </el-drawer>

        <!-- 制作天气预报 -->
        <el-dialog
        title="气象预报"
        :visible.sync="dialogVisible"
        width="600px">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="日期">
                <el-select v-model="form.region" placeholder="请选择模板">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="气象填写">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="日期">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
            </el-form>
        </el-dialog>        

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    weatherdrawer: Boolean
  },
  data(){
    return {
      // 天气预报
            forecastDrawer:false,
            dialogVisible:false,
            form:{
                date:null,
                region:null,
                desc:null
            },
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
            ],

            // 制作天气预报
            dialogVisible:false
    }
  },
  methods:{
      openForecastForm(){
        this.dialogVisible = true;  
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-drawer {
    min-width:500px;
}

</style>
