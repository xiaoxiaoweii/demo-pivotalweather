<template>
    <!-- 条件筛选 -->
        <div class="filterBox animated slideInLeft"
        style=" animate-duration: 1s"
        v-show="filtershow">
            <el-date-picker 
            type="date" 
            placeholder="日期选择" 
            v-model="form.date" 
            style="width:150px;"
            size="small"></el-date-picker>
            <el-time-picker
                v-model="form.date"
                placeholder="时间选择"
                style="width:150px;"
                size="small">
            </el-time-picker>
            <el-select v-model="form.region" placeholder="时次选择" size="small" style="width:150px;">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-select v-model="form.region" placeholder="航线选择" size="small" style="width:150px;">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <i class="el-icon-plus"></i>
        </div>
</template>

<script>
export default {
  name: 'FilterBar',
  props: {
      filtershow:Boolean
  },
  data(){
    return{
        form:{
                date:null,
                region:null,
                desc:null
            }
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 条件筛选 */
.animated {
    animation-delay:0.001s;
    animation-duration:0.3s;    
}

</style>
