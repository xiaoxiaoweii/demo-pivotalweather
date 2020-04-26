<template>
  <el-row>
    <el-col :span="24">
      <el-card class="box-card" shadow="always">
        <div slot="header" class="clearfix">
          <h3>Forecast Hour</h3>
        </div>
        <div class="hour_tag">
          <el-tag
            type="success"
            v-for="(item, index) in this.ProgressBarScale"
            :key="index"
            @click.native="clickHour(item, index)"
            :class="{ 'active': activeIndex === index}"
          >{{ProgressBarScale[index].hour}}</el-tag>
        </div>
        <div class="data_info">
          <span>Valid:</span>
          <i class="el-icon-caret-left" @click="clickLeftHour"></i>
          <span class="data_info_content">{{dataTime}}</span>
          <i class="el-icon-caret-right" @click="clickRightHour"></i>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      dataTime: 'Wed 2020-04-22 06z',
      // 小时
      ProgressBarScale: [
        {
          hour: '000',
          time: 'Wed 2020-04-22 06z'
        },
        {
          hour: '006',
          time: 'Wed 2020-04-22 12z'
        },
        {
          hour: '012',
          time: 'Wed 2020-04-22 24z'
        },
        {
          hour: '018',
          time: 'Wed 2020-04-23 06'
        },
        {
          hour: '024',
          time: 'Wed 2020-04-23 12z'
        },
        {
          hour: '030',
          time: 'Wed 2020-04-23 24z'
        },
        {
          hour: '036',
          time: 'Wed 2020-04-23 06z'
        },
        {
          hour: '042',
          time: 'Wed 2020-04-23 12z'
        },
        {
          hour: '048',
          time: 'Wed 2020-04-23 24z'
        },
        {
          hour: '054',
          time: 'Wed 2020-04-24 06z'
        },
        {
          hour: '060',
          time: 'Wed 2020-04-24 12z'
        },
        {
          hour: '066',
          time: 'Wed 2020-04-22 12z'
        },
        {
          hour: '072',
          time: 'Wed 2020-04-22 24z'
        },
        {
          hour: '080',
          time: 'Wed 2020-04-22 00z'
        }
      ],
    }
  },
  methods: {
    // 点击的hour
    clickHour(hour, index) {
      console.log(hour, index)
      this.activeIndex = index
      this.dataTime = this.ProgressBarScale[index].time
    },
    clickLeftHour () {
      this.activeIndex -= 1
      this.dataTime = this.ProgressBarScale[this.activeIndex].time
    },
    clickRightHour () {
      this.activeIndex += 1
      this.dataTime = this.ProgressBarScale[this.activeIndex].time
    }
  }
};
</script>

<style scoped>
.active{
  background: rgba(238, 5, 5, 0.067);
}
.data_info {
  margin-top: 15px;
}
.data_info i {
  cursor: pointer;
}
.data_info_content {
  font-size: 16px;
  border: 1px solid rgb(121, 116, 116);
}
.hour_tag{
  text-align: left;
}
</style>