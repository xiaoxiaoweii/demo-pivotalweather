 //import  "Getgif"
// Vue.use(Getgif)

import jcanvas from 'jcanvas'
import html2canvas from 'html2canvas'
export default {
    components:{
        
    },
    data(){
      return {
        defaultStrokeWidth:1,
        penColor:'',
        penWidth:0
      }
    },
    props:{
      
    },
    methods: {
        clipScreenshots(canvasId) {
            this.drawRect(canvasId, "#f09309", this.defaultStrokeWidth);
        },
        printClip(canvas, capture_x, capture_y, capture_width, capture_height) {
            // 创建一个用于截取的canvas
            var clipCanvas = document.createElement('canvas')
            clipCanvas.width = capture_width
            clipCanvas.height = capture_height
            // 截取
            clipCanvas.getContext('2d').drawImage(canvas, capture_x, capture_y, capture_width, capture_height, 0, 0, capture_width, capture_height)
            var clipImgBase64 = clipCanvas.toDataURL('image/png', 1.0)
            // 生成图片
            var clipImg = new Image()
            // var con = confirm('打印截图吗?取消则保存截图')
            // if (con) {
            //   $(clipImg).print();
            // }else {
              this.downloadIamge(clipImgBase64);
            // }
        },
        downloadIamge(imgUrl) {
            // 图片保存有很多方式，这里使用了一种投机的简单方法。
            // 生成一个a元素
            var a = document.createElement('a')
            // 创建一个单击事件
            var event = new MouseEvent('click')
            // 生成文件名称
            var timestamp = new Date().getTime();
            var name = imgUrl.substring(22, 30) + timestamp + '.png';
            a.download = name
            // 将生成的URL设置为a.href属性
            a.href = imgUrl;
            // 触发a的单击事件 开始下载
            a.dispatchEvent(event);
        },
        drawRect(canvasId, penColor, strokeWidth){
            
            var that = this;

            this.penColor = penColor;
            this.penWidth = strokeWidth;
            var canvas = document.getElementById(canvasId);
            //canvas 的矩形框
            var canvasRect = canvas.getBoundingClientRect();
            //canvas 矩形框的左上角坐标
            var canvasLeft = canvasRect.left;
            var canvasTop = canvasRect.top;

            // 要画的矩形的起点 xy
            var x = 0;
            var y = 0;
            //鼠标点击按下事件，画图准备
            canvas.onmousedown = function (e) {
                 //设置画笔颜色和宽度
                var color = that.penColor;
                var penWidth = that.penWidth;
                // 确定起点  canvas左上角坐标
                x = e.clientX - canvasLeft;
                y = e.clientY - canvasTop;

                sessionStorage.setItem('LeftLat1', x);   // 纬度
                sessionStorage.setItem('RightLon1', y);  // 经度

                // console.log(x, y, '鼠标确定起点,用户鼠标按下时的坐标');
                // $.fn.addLayer = function(){

                //     return this
                // }

                // 添加layer
                window.jQuery("#" + canvasId).addLayer({
                    type: 'rectangle',
                    strokeStyle: color,
                    strokeWidth: penWidth,
                    name: 'areaLayer',
                    fromCenter: false,
                    x: x,
                    y: y,
                    width: 1,
                    height: 1
                });
                // 绘制
                window.jQuery("#" + canvasId).drawLayers();
                window.jQuery("#" + canvasId).saveCanvas();

                //鼠标移动事件，画图
                canvas.onmousemove = function (e) {
                    // 要画的矩形的宽高
                    var width = e.clientX - canvasLeft - x;
                    var height = e.clientY - canvasTop - y;
                    // console.log(e.clientX,'e.clientX',canvasLeft,'canvasLeft');
                    // 清除之前画的
                    window.jQuery("#" + canvasId).removeLayer('areaLayer');

                    window.jQuery("#" + canvasId).addLayer({
                        type: 'rectangle',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name: 'areaLayer',
                        fromCenter: false,
                        x: x,
                        y: y,
                        width: width,
                        height: height
                    });

                    window.jQuery("#" + canvasId).drawLayers();
                }
            }

            //鼠标抬起
            canvas.onmouseup = function (e) {

                var color = that.penColor;
                var penWidth = that.penWidth;

                canvas.onmousemove = null;

                var width = e.clientX - canvasLeft - x;
                var height = e.clientY - canvasTop - y;

                var x2 = x + width;
                var y2 = y + height;
                sessionStorage.setItem('LeftLat2', x2);
                sessionStorage.setItem('RightLon2', y2);

                window.jQuery("#" + canvasId).removeLayer('areaLayer');

                window.jQuery("#" + canvasId).addLayer({
                    type: 'rectangle',
                    strokeStyle: color,
                    strokeWidth: penWidth,
                    name: 'areaLayer',
                    fromCenter: false,
                    x: x,
                    y: y,
                    width: width,
                });
                // console.log();
                window.jQuery("#" + canvasId).drawLayers();
                window.jQuery("#" + canvasId).saveCanvas();
                // 把body转成canvas
                html2canvas($(".cesium-widget").find("canvas")[0]).then(canvas1 => {
                    var capture_x, capture_y;
                if (width > 0) {
                    //从左往右画
                    capture_x = x + that.penWidth;
                } else {
                    //从右往左画
                    capture_x = x + width + that.penWidth;
                }
                if (height > 0) {
                    //从上往下画
                    capture_y = y + that.penWidth;
                } else {
                    //从下往上画
                    capture_y = y + height + that.penWidth;
                }
                
                //printClip(canvas, capture_x, capture_y, Math.abs(width), Math.abs(height));
                that.printClip(canvas1, capture_x, capture_y, Math.abs(width), Math.abs(height))
            });
                // 移除画的选取框
                window.jQuery("#" + canvasId).removeLayer('areaLayer');
                // 隐藏用于华画取框的canvas
                window.jQuery("#" + canvasId).hide();
            }
        }
    }
  }