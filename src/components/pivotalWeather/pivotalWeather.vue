
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <div class="left-container">
    <!-- 整体 -->
    <el-container>
      <!-- header部分 -->
      <el-header>
        <div>
          <span>
            model
            <i class="el-icon-caret-right"></i>
            <el-button type="primary" round size="mini" @click="showModelDialog">GFS</el-button>
          </span>
          <span>
            Zoom
            <i class="el-icon-caret-right"></i>
            <el-button type="primary" round size="mini" @click="showModelDialog">Continental US</el-button>
          </span>
          <span>
            Animation
            <i class="el-icon-caret-right"></i>
            <el-button type="primary" round size="mini" @click="showModelDialog">GFS</el-button>
          </span>
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <!-- Forecast Hour 预报小时 -->
          <forecast-hour></forecast-hour>
          <!-- Parameter 参数 -->
          <parameter></parameter>
        </el-aside>

        <!-- 图片区域 -->
        <img-pivotal></img-pivotal>
      </el-container>
    </el-container>
    <!-- 显示model对话框 -->
    <el-card v-if="showModel" class="model_dialog">
    <div class="content">
      <!-- 第一列 -->
      <div class="contents">
        <h3>Globle</h3>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="contents">
        <h3>Globle</h3>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="contents">
        <h3>Globle</h3>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
        <p>
          <span>
            <i class="el-icon-s-open"></i>GFS
          </span>
          <span></span>
          <span>224/224</span>
        </p>
      </div>
    </div>
  </el-card>

    <!-- 时间轴 -->
    <timeline-progress></timeline-progress>
  </div>
</template>

<script>
import forecastHour from "../pivotalWeather/components/forecastHour";
import parameter from "../pivotalWeather/components/Parameter";
import imgPivotal from "../pivotalWeather/components/imgPivotal";
import timelineProgress from "../pivotalWeather/components/timelineProgress";
export default {
  components: {
    forecastHour,
    parameter,
    imgPivotal,
    timelineProgress
  },
  data() {
    return {
      // 显示model
      showModelVisibleable: false,
      showModel: false
    };
  },
  methods: {
    // 显示model选择框
    showModelDialog() {
      console.log("111");
      this.showModel = !this.showModel;
    }
  }
};
</script>

<style scoped style="scss">
/* 布局 */
.left-container {
  position: absolute;
  top: 20px;
  left: 200px;
  /* border-radius: 5px; */
  opacity: 0.8;
  /* -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px; */
}
.el-header,
.el-footer {
  width: 1400px;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  width: 400px;
  height: 750px;
  /* background-color: #d3dce6; */
  color: #333;
  /* text-align: center; */
  line-height: 20px;
}
body > .el-container {
  margin-bottom: 150px;
}
/* .el-row {
  margin-top: 20px;
} */
/* 布局结束 */
/* aside开始 */
.text {
  font-size: 14px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.el-select {
  text-align: center;
  line-height: 60px;
}
.el-card__header {
  background: chocolate;
}
/* .data_info {
  margin-top: 20px;
} */
/* aside结束 */

/* model对话框 */
.model_dialog {
  position: absolute;
  top: 65px;
  width: 1083px;
  height: 266px;
}
.model_dialog .content {
  flex: 1 1 auto;
  flex-direction: reverse;
  display: flex;
  width: 100%;
  height: 100%;
}
.model_dialog .content .contents {
  align-items: center;
  flex: 1;
}
.model_dialog .content .contents p {
  display: flex;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
}
.model_dialog .content .contents p:hover {
  background: rgb(118, 118, 145);
  color: rgb(112, 9, 9);
}
.model_dialog .content .contents p span {
  align-items: center;
  flex: 1;
}
/* model对话框结束 */
</style>