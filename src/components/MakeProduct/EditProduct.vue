<template>
    <div class="drawer-container">
        <el-drawer
            :visible.sync="editdrawer"
            direction="btt"
            :modal="modalVal"
            :before-close="handleClose"
            size="477px">
            <div slot="title">
                <span  style="float:left;">产品编辑</span>
            </div>
            <div class="makeHeader">
                <div class="makeTitle">
                    <i class="iconfont icon-houtui"></i>
                    <i class="el-icon-refresh"></i>
                    <i class="iconfont icon-qianjin"></i>
                </div>
                <el-select v-model="form.region" placeholder="航线选择" size="mini">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-row :gutter="20">
                        <el-col :span="20">
                            <el-select v-model="form.region" placeholder="要素选择" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="4">
                            <i class="el-icon-plus"></i>
                        </el-col>
                    </el-row>
                    
                    
                <ul>
                    <li v-for="(item,index) in editList" :key="index">
                        <span>{{item.title}}</span>
                        <i :class="item.icon"></i>
                    </li>
                </ul>
                <el-input v-model="form.desc" size="mini"></el-input>
                <el-button type="primary" size="mini">保存</el-button>
            </div>
            <div class="makeContent">
                <div class="pointer">
                     <i class="iconfont icon-bofang"></i>
                </div>
                <ul>
                    <li v-for="(item,index) in editContentList" :key="index" class="makeItem">
                        <div class="contentTime">{{item.time}}</div>
                        <div class="editImg">
                            <el-image :src="src">
                                <div slot="placeholder" class="image-slot">
                                    加载中<span class="dot">...</span>
                                </div>
                            </el-image>
                        </div>
                        <div class="mainContent">
                            <ul class="tem1">
                                <li v-for="(item1,index1) in item.temData" :key="index1">
                                    {{item1}}
                                </li>
                            </ul>
                            <ul class="ocean">
                                <li v-for="(item2,index2) in item.ocean" :key="index2">
                                    {{item2}}
                                </li>
                            </ul>
                            <ul class="wind">
                                <li v-for="(item3,index3) in item.wind" :key="index3">
                                    {{item3}}
                                </li>
                            </ul>
                            <ul class="airpressure">
                                <li v-for="(item1,index1) in item.airpressure" :key="index1">
                                    {{item1}}
                                </li>
                            </ul>
                        </div>
                        
                        <div class="detail">
                            <div>位置：{{item.position}}</div>
                            <div>时间：{{item.time1}}</div>
                            <div>
                                <span>备注：</span>
                                <el-input type="textarea" v-model="form.desc" resize="none"></el-input>
                            </div>
                        </div>
                    </li> 
                </ul>
            </div>
        </el-drawer>
    </div>
</template>

<script>
export default {
  name: 'EditProduct',
  props: {
    editdrawer: Boolean,
    filtershow:Boolean
  },
  data(){
      return {
          src:null,
          modalVal:false,
            editList:[
                {
                    title:'温度',
                    icon:'iconfont icon-sheshidu01'
                },
                {
                    title:'洋流',
                    icon:'iconfont icon-yangliu'
                },
                {
                    title:'风',
                    icon:'iconfont icon-wind'
                },
                {
                    title:'气压(hPa)',
                    icon:'iconfont icon-daqiyali'
                },
                {
                    title:'详情',
                    icon:'iconfont icon-xiangqing'
                }
            ],
            editContentList:[
                {
                    time:'星期三 2020-01-15 10:11:15',
                    temData:[10,10,10,10,10,10,10,10],
                    ocean:[13,11,12,15,18,17,17,17],
                    wind:[13,11,12,15,18,17,17,17],
                    airpressure:[1000,1000,1000,1000],
                    position:'20°53.538’N 123°17.314’E ',
                    time1:'2020-01-10 10:15:10',
                    mark:'xxx时起风，yyy后停止'
                },
                 {
                    time:'星期三 2020-01-15 10:11:15',
                    temData:[10,10,10,10,10,10,10,10],
                    ocean:[13,11,12,15,18,17,17,17],
                    wind:[13,11,12,15,18,17,17,17],
                    airpressure:[1000,1000,1000,1000],
                    position:'20°53.538’N 123°17.314’E ',
                    time1:'2020-01-10 10:15:10',
                    mark:'xxx时起风，yyy后停止'
                },
                {
                    time:'星期三 2020-01-15 10:11:15',
                    temData:[10,10,10,10,10,10,10,10],
                    ocean:[13,11,12,15,18,17,17,17],
                    wind:[13,11,12,15,18,17,17,17],
                    airpressure:[1000,1000,1000,1000],
                    position:'20°53.538’N 123°17.314’E ',
                    time1:'2020-01-10 10:15:10',
                    mark:'xxx时起风，yyy后停止'
                },
                 {
                    time:'星期三 2020-01-15 10:11:15',
                    temData:[10,10,10,10,10,10,10,10],
                    ocean:[13,11,12,15,18,17,17,17],
                    wind:[13,11,12,15,18,17,17,17],
                    airpressure:[1000,1000,1000,1000],
                    position:'20°53.538’N 123°17.314’E ',
                    time1:'2020-01-10 10:15:10',
                    mark:'xxx时起风，yyy后停止'
                },
            ],
            form:{
                date:null,
                region:null,
                desc:null
            }
      }
  },
  methods:{
      handleClose(){
          this.$emit('update:editdrawer', false);
          this.$emit('update:filtershow', false);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drawer-container {
}
.el-drawer__wrapper {
  height:477px;
  position: absolute;
  bottom:0;
}
.makeHeader {
    height:400px;
}
    .makeHeader .makeTitle i {
        color:#ff8d1a;
        line-height:38px;
    }
.makeContent {
    height:400px;
}
    .makeHeader .el-row {
        margin-bottom: 72px;
    }
    .makeHeader .el-col .el-input {
        align-self:flex-start
    }
    .makeHeader .el-col i {
        line-height:40px;
        color:#2974f4;
    }
.makeContent .makeItem {
    height:400px;
}
.pointer i {
    top:100px;
}
</style>
