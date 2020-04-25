<template>
  <div class="drawer-container">
      <el-drawer
            :visible.sync="makedrawer"
            direction="btt"
            :modal="modalVal"
            :before-close="handleClose"
            size="360px">
            <div slot="title">
                <span  style="float:left;">产品制作</span>
            </div>
            <div class="makeHeader">
                <div class="makeTitle">
                    <el-select v-model="form.region" placeholder="航线选择" size="mini">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </div>
                <ul>
                    <li v-for="(item,index) in makeList" :key="index">
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
                    <li v-for="(item,index) in makeContentList" :key="index" class="makeItem">
                        <div class="contentTime">{{item.time}}</div>
                        <div class="mainContent">
                            <ul>
                                <li v-for="(item1,index1) in item.timeData" :key="index1">
                                    {{item1}}
                                </li>
                            </ul>
                            <ul>
                                <li v-for="(item2,index2) in item.timeData" :key="index2">
                                    {{item2}}
                                </li>
                            </ul>
                            <ul class="tem">
                                <li v-for="(item3,index3) in item.temData" :key="index3">
                                    {{item3}}
                                </li>
                            </ul>
                            <ul>
                                <li v-for="(item1,index1) in item.timeData" :key="index1">
                                    {{item1}}
                                </li>
                            </ul>
                            <ul>
                                <li v-for="(item2,index2) in item.timeData" :key="index2">
                                    {{item2}}
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
  name: 'MakeProduct',
  props: {
    makedrawer: Boolean,
    filtershow:Boolean
  },
  components:{
  },
  data(){
      return {
          modalVal:false,
            makeList:[
                {
                    title:'小时',
                    icon:'iconfont icon-shijian'
                },
                {
                    title:'xx港-yy港',
                    icon:'iconfont icon-chuan'
                },
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
                    title:'详情',
                    icon:'iconfont icon-xiangqing'
                }
            ],
            makeContentList:[
                {
                    time:'周六',
                    timeData:['0时','3时','6时','9时','12时','15时','18时','21时'],
                    temData:[10,10,10,10,10,10,10,10],
                    position:'20°53.538’N 123°17.314’E ',
                    time1:'2020-01-10 10:15:10',
                    mark:'xxx时起风，yyy后停止'
                },
                {
                    time:'周六',
                    timeData:['0时','3时','6时','9时','12时','15时','18时','21时'],
                    temData:[10,10,10,10,10,10,10,10],
                    position:'20°53.538’N 123°17.314’E ',
                    time1:'2020-01-10 10:15:10',
                    mark:'xxx时起风，yyy后停止'
                },
                {
                    time:'周六',
                    timeData:['0时','3时','6时','9时','12时','15时','18时','21时'],
                    temData:[10,10,10,10,10,10,10,10],
                    position:'20°53.538’N 123°17.314’E ',
                    time1:'2020-01-10 10:15:10',
                    mark:'xxx时起风，yyy后停止'
                },
                {
                    time:'周六',
                    timeData:['0时','3时','6时','9时','12时','15时','18时','21时'],
                    temData:[10,10,10,10,10,10,10,10],
                    position:'20°53.538’N 123°17.314’E ',
                    time1:'2020-01-10 10:15:10',
                    mark:'xxx时起风，yyy后停止'
                }
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
          this.$emit('update:makedrawer', false);
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
  height:360px;
  position: absolute;
  bottom:-360px;
}
.makeHeader {
    height:285px;
}
.makeContent {
    height:285px;
}
.makeContent .makeItem {
        height:285px;
}
</style>
