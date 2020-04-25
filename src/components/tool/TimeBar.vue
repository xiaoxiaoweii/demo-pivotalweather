/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <div>
    <div class="controls">
      <select id="select" class="selects" title="播放速度">
        <option value="400">5倍</option>
        <option value="1000">2倍</option>
        <option value="2000" selected>正常</option>
        <option value="10000">0.2倍</option>
        <option value="4000">0.5倍</option>
      </select>
    </div>

    <div id="timePlay"></div>

    <div id='timeChoose' class="layContainer">
      <el-date-picker
        v-model="datetime"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions"
        @change="changeTime"
        value-format="yyyy-MM-dd hh:mm:00"
        size="mini"
        >
      </el-date-picker>
    </div>
  </div>
 
</template>
<script>
import "../../styles/timePlay.css";
// import $ from 'jquery'
export default {
  name: 'TimeBar',
  props: {
    msg: String
  },
  data(){
    return {
      datetime:null,
      checkTime: null,
      pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
    }
  },
  computed:{
  },
  mounted: function(){
    let that = this;
   	this.checkTime = function(currday,sTime,eTime){
          $("#timePlay").html("");
          var timer = new TimePlay({
            startDate:sTime, 
            endDate: eTime, 
            timeUnitControl: true, 
            onClickChangeEnd: function(timePlay) { 
              console.log('时间轴动画下标：',timer.curr_day.year + '-' +timer.curr_day.mon + '-' + timer.curr_day.day + ' ' + timer.curr_day.hour +':'+ timer.curr_day.min)
              $(".curr-popup").text(timer.curr_day.mon + '-' + timer.curr_day.day + ' ' + timer.curr_day.hour +':'+ timer.curr_day.min);
            },
            onAnimateEnd: function(timePlay) {
              var m = timer.curr_day.min
              console.log('时间下标：',timer.curr_day.year + '-' +timer.curr_day.mon + '-' + timer.curr_day.day + ' ' + timer.curr_day.hour +':'+ ((m < 10)?('0'+m):m))
            }
          });

          $('#test5').click(function(){
            timer.stopPlay();
          })

          $(".for-animate").show();
          var year = Number(currday.year);
          var month = Number(currday.mon);
          var day = Number(currday.day);
          var hour = Number(currday.hour);
          var min = Number(currday.min);
          timer.curr_day = currday;

          $(".curr-popup").text((month>9?month:'0'+month) + '-' + (day>9?day:'0'+day) + ' ' + (hour>9?hour:'0'+hour) +':'+ (min>9?min:'0'+min));
          for (var i = 0, len = $('.every').length; i < len; i++) {
            var m = parseInt($('.every:eq(' + i + ') .mon').text());
            var d = parseInt($('.every:eq(' + i + ') .day').text());
            if (month == m && day == d) {
              timer.index = i;
              timer.width = timer.dis * i + timer.dis / 24 * (hour) + (timer.dis / 24 / 60) * min; //已经运行的进度条总长度
              timer.progressAni();
              break;
            }
          }
      }

  let a = halfMonth(new Date())+''
  let b = lastDay(new Date())+''
  //console.log(a,b)
  //a = a.substring(0,4)+'-'+a.substring(4,6)+'-'+a.substring(6,8)
  a = new Date(a.substring(0,4),a.substring(4,6),a.substring(6,8))
  b = new Date(b.substring(0,4),b.substring(4,6),b.substring(6,8))
  //b = b.substring(0,4)+'-'+b.substring(4,6)+'-'+b.substring(6,8)
	// 初始化结束
  //console.log('halfMonth(new Date())',halfMonth(new Date()),lastDay(new Date()))
    //初始化
    this.checkTime({
      "year":getNowTime()[0],
      "mon": getNowTime()[1],
      "day": getNowTime()[2],
      "hour":getNowTime()[3],
      "min": getNowTime()[4]
    }, halfMonth(new Date()), lastDay(new Date()));
  },
  methods:{
    
  //  监听日期控件选择事件   起报时间只能选择之前的时间,之后的时间不可选
    changeTime(){
      // 判断，如果用户手动清除时间选择器中的时间
      if(this.datetime){
        let dateArr = this.datetime.slice(0,10).split('-');
        let timeArr = this.datetime.slice(11).split(':');
				this.checkTime({
					"year":dateArr[0],
					"mon": dateArr[1], 
					"day": dateArr[2],
					"hour": timeArr[0],
					"min": timeArr[1]
				},
					halfMonth(this.datetime), 
					lastDay(this.datetime)   
				);
			} else {
				this.checkTime({
					"year":getNowTime()[0],
					"mon": getNowTime()[1],
					"day": getNowTime()[2],
					"hour":getNowTime()[3],
					"min": getNowTime()[4]
				},halfMonth(new Date()), lastDay(new Date()));
			
      }
    }
  }
}
</script>

<style scoped>
  #app .timeControl-box{
    position: absolute;
    width: 22px;
    height: 30px;
    top: 26px;
    left: 50px;
    margin-left: 5px;
}

#app .layContainer{
	width: 150px;
	height: 30px;
	bottom: 23px;
}
</style>
