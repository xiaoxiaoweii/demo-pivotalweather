<template>
    <div>
        <!-- 产品列表 -->
        <el-drawer
        :visible.sync="listdrawer"
        direction="ltr"
        :modal="modalVal"
        :wrapperClosable="modalVal"
        :before-close="handleClose"
        size="500px">
        <div slot="title">
            <span  style="float:left;">产品列表</span>
            <el-button type="primary" size="mini" style="float:right;" @click="makeProduct">制作</el-button>
        </div>
         <ul class="drawer-list" style="overflow:auto">
            <li v-for="(item,index) in productList" :key="index" class="drawer-list-item">
                <el-row>
                    <el-col :span="16">
                      <div>{{item.line}}</div>
                      <div>离开：{{item.time1}}</div>
                      <div>
                          <span class="pr20">航行：{{item.data1}}</span>
                          里程：{{item.data2}}
                      </div>
                      <div>到达：{{item.time2}}</div>
                    </el-col>
                    <el-col :span="8">
                        <el-button type="info" size="mini" @click="editProduct">编辑</el-button>
                        <el-button type="info" size="mini">删除</el-button>
                    </el-col>
                </el-row>
            </li>
         </ul>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
            </el-pagination>
        </el-drawer>    
    </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    listdrawer: Boolean,
    makedrawer: Boolean,
    filtershow: Boolean,
    editdrawer: Boolean
  },
  data(){
      return {
          currentPage:1,
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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      makeProduct(){
          this.$emit('update:listdrawer', false);
          this.$emit('update:makedrawer', true);
          this.$emit('update:editdrawer', false);
          this.$emit('update:filtershow', true);
      },
      editProduct(){
          this.$emit('update:listdrawer', false);
          this.$emit('update:makedrawer', false);
          this.$emit('update:editdrawer', true);
          this.$emit('update:filtershow', true);
      },
      handleClose(){
          this.$emit('update:listdrawer', false);
          this.$emit('update:makedrawer', false);
          this.$emit('update:editdrawer', false);
          this.$emit('update:filtershow', false);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-drawer__wrapper {
  width:500px;
}

</style>
