
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <div class="left-container">
    <el-container>
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
          <el-row>
            <el-col :span="24">
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <h3>Forecast Hour</h3>
                </div>
                <div>
                  <el-tag type="sucess">000</el-tag>
                  <el-tag type="sucess">006</el-tag>
                  <el-tag type="sucess">012</el-tag>
                  <el-tag type="sucess">018</el-tag>
                  <el-tag type="sucess">024</el-tag>
                  <el-tag type="sucess">030</el-tag>
                  <el-tag type="sucess">036</el-tag>
                  <el-tag type="sucess">042</el-tag>
                  <el-tag type="sucess">048</el-tag>
                  <el-tag type="sucess">054</el-tag>
                </div>
                <div class="data_info">
                  <span>Valid:</span>
                  <i class="el-icon-caret-left"></i>
                  <span class="data_info_content">Wed 2020-04-22 06z</span>
                  <i class="el-icon-caret-right"></i>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <!-- Parameter 参数 -->
          <el-row>
            <el-col :span="24" shadow="always">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <h3>Parameter</h3>
                </div>
                <div>
                  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <div class="imgUrl">
            <el-image
              style="width: 100%; height: 100%"
              src="https://m3.pivotalweather.com/maps/models/gfs/2020042200/006/sfct_anom.conus.png"
              fit="contain"
              :preview-src-list="srcList"
            ></el-image>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <!-- <el-row class="tac">
      <el-col :span="24">
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title" class="hoverShow" selected>
              <i class="iconfont iconweixingtu"></i>
              <span>风云四号</span>
            </template>
            <el-menu-item class="second-menu FY" index="1-1">
              <span>成像仪</span>
              <fy-imager class="commonThird"></fy-imager>
            </el-menu-item>
            <el-menu-item class="second-menu FY" index="1-2">
              <span>探测仪</span>
              <fy-detector class="commonThird"></fy-detector>
            </el-menu-item>
            <el-menu-item class="second-menu FY" index="1-3">
              <span>闪电仪</span>
              <fy-lightning v-on:ToLightning="getLightning" class="commonThird"></fy-lightning>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="2" class="hoverShow">
            <i class="iconfont iconweixing icon-rotate"></i>
            <span slot="title">葵花八号</span>
            <kh-eight class="commonThird"></kh-eight>
          </el-menu-item>
          <el-menu-item index="3" class="hoverShow">
            <i class="iconfont iconzhandian"></i>
            <span slot="title">自&ensp;动&ensp;站</span>
          </el-menu-item>
          <el-menu-item index="4" class="hoverShow">
            <i class="iconfont iconleida3"></i>
            <span slot="title">探空雷达</span>
            <search-sky-radar :imgPlay="imgPlay" class="commonThird"></search-sky-radar>
          </el-menu-item>
          <el-menu-item index="5" class="hoverShow">
            <i class="iconfont iconweibofushe"></i>
            <span slot="title">微波辐射</span>
          </el-menu-item>
          <el-menu-item index="6" class="hoverShow">
            <i class="iconfont iconleida"></i>
            <span slot="title">雷&emsp;&emsp;达</span>
          </el-menu-item>
          <el-menu-item index="7" class="hoverShow">
            <i class="el-icon-s-data"></i>
            <span slot="title">数值模式</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>-->

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
            <span>1</span>
          </p>
          <p>
            <span>
              <i class="el-icon-s-open"></i>GFS
            </span>
            <span></span>
            <span>1</span>
          </p>
          <p>
            <span>
              <i class="el-icon-s-open"></i>GFS
            </span>
            <span></span>
            <span>1</span>
          </p>
          <p>
            <span>
              <i class="el-icon-s-open"></i>GFS
            </span>
            <span></span>
            <span>1</span>
          </p>
          <p>
            <span>
              <i class="el-icon-s-open"></i>GFS
            </span>
            <span></span>
            <span>1</span>
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
            <span>1</span>
          </p>
          <p>
            <span>
              <i class="el-icon-s-open"></i>GFS
            </span>
            <span></span>
            <span>1</span>
          </p>
          <p>
            <span>
              <i class="el-icon-s-open"></i>GFS
            </span>
            <span></span>
            <span>1</span>
          </p>
          <p>
            <span>
              <i class="el-icon-s-open"></i>GFS
            </span>
            <span></span>
            <span>1</span>
          </p>
          <p>
            <span>
              <i class="el-icon-s-open"></i>GFS
            </span>
            <span></span>
            <span>1</span>
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
            <span>1</span>
          </p>
          <p>
            <span>
              <i class="el-icon-s-open"></i>GFS
            </span>
            <span></span>
            <span>1</span>
          </p>
          <p>
            <span>
              <i class="el-icon-s-open"></i>GFS
            </span>
            <span></span>
            <span>1</span>
          </p>
          <p>
            <span>
              <i class="el-icon-s-open"></i>GFS
            </span>
            <span></span>
            <span>1</span>
          </p>
          <p>
            <span>
              <i class="el-icon-s-open"></i>GFS
            </span>
            <span></span>
            <span>1</span>
          </p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      // Parameter 参数 树节点数据
      data: [
        {
          label: "Upper-Air: Height, Wind, Temperature",
          children: [
            {
              label: "Height and Wind",
              children: [
                {
                  label: "200 mb Height, Wind"
                },
                {
                  label: "300 mb Height, Wind"
                },
                {
                  label: "500 mb Height, Wind"
                },
                {
                  label: "700 mb Height, Wind"
                },
                {
                  label: "850 mb Height, Wind"
                },
                {
                  label: "925 mb Height, Wind"
                }
              ]
            },
            {
              label: "Temperature and Wind",
              children: [
                {
                  label: "500 mb Temperature, Height, Wind"
                },
                {
                  label: "700 mb Temperature, Height, Wind"
                },
                {
                  label: "825 mb Temperature, Height, Wind"
                },
                {
                  label: "925 mb Temperature, Height, Wind"
                }
              ]
            },
            {
              label: "Anomalies",
              children: [
                {
                  label: "500 mb Height Anomaly"
                },
                {
                  label: "850 mb Temperature Anomaly"
                }
              ]
            }
          ]
        },
        {
          label: "Surface and Precipitation",
          children: [
            {
              label: "Surface",
              children: [
                {
                  label: "2 m AGL Relative Humidity"
                },
                {
                  label: "2 m AGL Temperature"
                },
                {
                  label: "2 m AGL Temperature, Wind Barbs"
                },
                {
                  label: "2 m AGL Wind Chill/Heat Index"
                },
                {
                  label: "2 m AGL Dew Point"
                },
                {
                  label: "2 m AGL Dew Point, Wind Barbs"
                },
                {
                  label: "MSLP, 10 m AGL Wind"
                }
              ]
            },
            {
              label: "Precipitation Type",
              children: [
                {
                  label: "Precipitation Type, Rate"
                }
              ]
            },
            {
              label: "Quantitative Precipitation",
              children: [
                {
                  label: "3-hr Accumulated QPF"
                },
                {
                  label: "6-hr Accumulated QPF"
                },
                {
                  label: "12-hr Accumulated QPF"
                },
                {
                  label: "24-hr Accumulated QPF"
                },
                {
                  label: "48-hr Accumulated QPF"
                },
                {
                  label: "120-hr Accumulated QPF"
                },
                {
                  label: "Total Accumulated QPF"
                }
              ]
            },
            {
              label: "Integrated Moisture and Satellite",
              children: [
                {
                  label: "Cloud Cover"
                },
                {
                  label: "Precipitable Water (PWAT)"
                }
              ]
            },
            {
              label: "Radar Products",
              children: [
                {
                  label: "Composite Reflectivity"
                }
              ]
            },
            {
              label: "Anomalies",
              children: [
                {
                  label: "PWAT Anomaly"
                },
                {
                  label: "2 m AGL Temperature Anomaly"
                }
              ]
            }
          ]
        },
        {
          label: "Quantitative Precipitation",
          children: [
            {
              label: "二级 1-1"
            }
          ]
        },
        {
          label: "Upper-Air: Moisture",
          children: [
            {
              label: "二级 1-1"
            }
          ]
        },
        {
          label: "Upper-Air: Dynamics",
          children: [
            {
              label: "二级 1-1"
            }
          ]
        },
        {
          label: "Severe Weather",
          children: [
            {
              label: "二级 1-1"
            }
          ]
        },
        {
          label: "Winter Weather",
          children: [
            {
              label: "二级 1-1"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      formInline: {
        user: "",
        region: ""
      },
      // 预览图片
      srcList: [
        "https://i1.pivotalweather.com/sounding_images/gfs_2020042200_006_46.75--102.75.png",
        "https://i1.pivotalweather.com/sounding_images/gfs_2020042200_006_46.75--102.75.png"
      ],
      // 显示model
      showModel: false
    };
  },
  methods: {
    // 点击树节点触发事件
    handleNodeClick(data) {
      console.log(data);
    },
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
  border-radius: 5px;
  opacity: 0.8;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
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
.el-main {
  width: 400px;
  height: 750px;
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 200px;
}
.el-row {
  margin-top: 20px;
}
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
.data_info {
  margin-top: 10px;
}
.data_info_content {
  font-size: 12px;
  border: 1px solid rgb(121, 116, 116);
}
/* aside结束 */
/* main开始 */
.imgUrl {
  width: 100%;
  height: 100%;
}
.imgUrl img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
/* main结束 */

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
}
.model_dialog .content .contents p span {
  align-items: center;
  flex: 1;
}
/*#app .left-container .el-menu{
    overflow: visible !important;
  }
  #app .left-container .right-container{
    position: absolute !important;
  }*/
</style>