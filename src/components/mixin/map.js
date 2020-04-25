import axios from 'axios'
export default {
    data(){
        return {
            stationData:[], //公共站点数据
          imageCode:null,//公共站点图片
          mapView:null,
          cameraHeight:null,
          zoom:{
              value:[1,1.8,3,5,9,11],
              index:0
          } 
        }
    },
    mounted() {
        Cesium.Ion.defaultAccessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwODc0NzJkOS1jNTJkLTRmZjAtOTRiOC02MzliZDdhYWE3MDgiLCJpZCI6MjM3NDcsInNjb3BlcyI6WyJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1ODM5MzgzMDB9.43324p5Q5zhfHpfrt8bHeZmmoK2stZAVgPB8d1WO8Iw';

  //影像底图切换
    var img_tdt_yx = new Cesium.ProviderViewModel({
        name: "影像底图",
        tooltip: "影像底图",
        //显示切换的图标
        iconUrl: "./images/img_tdt_yx.png",
        creationFunction: function () {
            var esri = new Cesium.UrlTemplateImageryProvider({
                url: 'http://192.168.2.112:8301/map/server/tianditu-satellite/{x}/{y}/{z}'
            });
            //影像标注
            addImageryProvider("http://192.168.2.112:8301/map/server/tianditu-satellite/{x}/{y}/{z}");
            return esri;
        }
    });
    //矢量底图切换
    var img_tdt_sl = new Cesium.ProviderViewModel({
        name: "矢量底图",
        tooltip: "矢量底图",
        iconUrl: "./images/img_tdt_sl.png",
        creationFunction: function () {
            var esri = new Cesium.UrlTemplateImageryProvider({
                url: 'http://192.168.2.112:8301/map/server/tianditu-satellite/{x}/{y}/{z}'
            });
            addImageryProvider("http://192.168.2.112:8301/map/server/tianditu-satellite/{x}/{y}/{z}")
            return esri;
        }
    });

    //地形底图切换
    var img_tdt_dx = new Cesium.ProviderViewModel({
        name: "地形底图",
        tooltip: "地形底图",
        iconUrl: "./images/img_tdt_dx.png",
        creationFunction: function () {
            var esri = new Cesium.UrlTemplateImageryProvider({
                url: 'http://192.168.2.112:8301/map/server/tianditu-satellite/{x}/{y}/{z}'
            });
            addImageryProvider("http://192.168.2.112:8301/map/server/tianditu-satellite/{x}/{y}/{z}")
            return esri;
        }
    });

    //ui入口
    let viewer = new Cesium.Viewer('cesiumContainer',{
        animation:false,//是否创建动画小器件，左下角仪表 
        timeline: false,//是否显示时间轴    
        sceneModePicker: false,//是否显示3D/2D选择器    
        baseLayerPicker: false,//是否显示图层选择器   
        geocoder: false,//是否显示geocoder小器件，右上角查询按钮
        scene3DOnly: true,//如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源 
        navigationHelpButton: false,//是否显示右上角的帮助按钮
        homeButton: false,//是否显示Home按钮
        infoBox: true,//是否显示信息框    
        showRenderLoopErrors: false,//如果设为true，将在一个HTML面板中显示错误信息 
        contextOptions:{
            webgl:{
                preserveDrawingBuffer: true,
                alpha:true
            }
        },
        orderIndependentTranslucency:false
    //      imageryProvider : new Cesium.OpenStreetMapImageryProvider({
    //     url : 'https://a.tile.openstreetmap.org/'
    // })
        /*************************************************************/
        // imageryProvider : new Cesium.ArcGisMapServerImageryProvider( {
        // url : 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
        // } ),
        // baseLayerPicker : false
    });
    viewer.scene.skyBox.show = false
    viewer.scene.backgroundColor = new Cesium.Color(0.0,0.0,0.0,0.0)
    this.mapView = viewer
    this.mapView.camera.setView({destination:Cesium.Cartesian3.fromDegrees(116,30,30000000)});
    //影像标注加载
    let addImageryProvider = function(url){
        viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
            url: url,
            layer: "tdtImgAnnoLayer",
            style: "default",
            format: "image/jpg",
            tileMatrixSetID: "GoogleMapsCompatible",
            show: false
        }))
    }
   
    //隐藏cesium左下角logo
    viewer._cesiumWidget._creditContainer.style.display = 'none';
    //请求测试数据
    //this.getStationData()

    //初始化的镜头、视角
    //viewer.camera.setView({destination:Cesium.Cartesian3.fromDegrees(116.39,39.9,1500000)});
    var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    var pop=[];
    var p=undefined;
    handler.setInputAction( (evt)=> {
    	 var trackPop = undefined; //记录鼠标捕获实体的坐标
    	//添加单击监听事件
    	    var pick = viewer.scene.pick(evt.position);
    	    if(this.stationData.length){
                let setData = this.stationData
                for(let i = 0; i < setData.length; i ++){
                    if (Cesium.defined(pick) &&pick.id.comments == 'event'+setData[i].id) {
                        var popup = new MovePrompt(viewer, {
                                    name:"RED",
                                    type: 2,
                                    popupCartesian: Cesium.Cartesian3.fromDegrees(setData[i].lon, setData[i].lat),
                                            content: `
                                                        <div class="s-dialog-wrap">
                                                        <span>${setData[i].zhanhao}<span/>
                                                        </div>
                                                    `            
                                            }) ;
                                p=popup;
                                pop.push(p);
                        
                    }
                }
            }
    	     
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    // 如果为真，则允许用户旋转相机。如果为假，相机将锁定到当前标题。此标志仅适用于2D和3D。
    this.mapView.scene.screenSpaceCameraController.enableRotate = false;
    // 如果为true，则允许用户平移地图。如果为假，相机将保持锁定在当前位置。此标志仅适用于2D和Columbus视图模式。
    this.mapView.scene.screenSpaceCameraController.enableTranslate = false;
    // 如果为真，允许用户放大和缩小。如果为假，相机将锁定到距离椭圆体的当前距离
    this.mapView.scene.screenSpaceCameraController.enableZoom = false;
    // 如果为真，则允许用户倾斜相机。如果为假，相机将锁定到当前标题。这个标志只适用于3D和哥伦布视图。
    this.mapView.scene.screenSpaceCameraController.enableTilt = false;

    // 获取当前镜头位置的笛卡尔坐标
        let cameraPos = this.mapView.camera.position;

        // 获取当前坐标系标准
        let ellipsoid = this.mapView.scene.globe.ellipsoid;

        // 根据坐标系标准，将笛卡尔坐标转换为地理坐标
        this.cartographic = ellipsoid.cartesianToCartographic(cameraPos);

        // 获取镜头的高度
        this.cameraHeight = this.cartographic.height; 

        var handler2 = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
        handler2.setInputAction((event)=> {
            if(event > 0){//放大
                if(this.zoom.index + 1 >this.zoom.value.length - 1){
                    return
                }
                this.zoom.index ++
                this.$refs.zm.zoomUpOfMap()
                //this.mapMutipleAllUp(this.zoom)
            }else{
                if(this.zoom.index - 1 <0){
                    return
                }

                this.zoom.index --
                this.$refs.zm.zoomDownOfMap()
                //this.mapMutipleAllDown(this.zoom)
            }
        }, Cesium.ScreenSpaceEventType.WHEEL);
    },
    methods: {
        clearStation(){
            this.mapView.entities.removeAll()
        },
        mapMutipleAllDown(zoom){
            let centerLon = parseFloat(Cesium.Math.toDegrees(this.cartographic.longitude).toFixed(8));
            let centerLat = parseFloat(Cesium.Math.toDegrees(this.cartographic.latitude).toFixed(8));
    
            //console.log('down',this.cameraHeight,v)
            this.zoom = zoom
            // 镜头拉远
            this.mapView.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(centerLon, centerLat, this.cameraHeight * (1/zoom.value[zoom.index])),
                duration: 1.0
            });
        },
        mapMutipleAllUp(zoom){
              let centerLon = parseFloat(Cesium.Math.toDegrees(this.cartographic.longitude).toFixed(8));
                let centerLat = parseFloat(Cesium.Math.toDegrees(this.cartographic.latitude).toFixed(8));
    
                //console.log('up',this.cameraHeight,v)
                this.zoom = zoom
                // 镜头拉近
                this.mapView.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(centerLon, centerLat, this.cameraHeight / zoom.value[zoom.index]),
                    duration: 1.0
                });
    
        },
        getCodeImage(url,dataType) {
            return axios({
                method: 'GET',
                url: `${url}`,
                responseType: dataType
            }).then(res => {
                return 'data:image/png;base64,' + btoa(
                new Uint8Array(res.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
                )
            }).then((res) => {
                return res
            }).catch((e) => {
                return null
            })
        },
        getRadarData(){//探空雷达
            this.clearStation()
            this.loading = true
            axios({
                method: 'GET',
                url: 'lbo/show',
                responseType: 'json'
            }).then(res => {
                if(res.data && res.data.data.length){
                    this.loading = false
                    let tData = res.data.data
                    this.stationData = tData
                    this.$refs.zm.curMutipleValue = 4
                    this.$refs.zm.zoomUpOfMap()
                    tData.forEach(
                        (e,i,arr) => {
                            let skyUrl = 'lbo/lbd?name='+e.zhanhao+'&time=2016-06-23 23:15:00'
                            this.getCodeImage(skyUrl,'arraybuffer').then((img)=>{
                                this.addEntities(e.id,e.zhanhao,'',e.lon,e.lat,img)
                            })
                        }
                    )
                }
                else{
                    this.$message.error('探空雷达站点无数据！')
                    return
                }
            }).catch((e) => {
            })
        },
        addEntities(id,shi,qu,lon,lat,imgCode){
            this.mapView.entities.add({
                name:shi+qu+"站点信息",
                description:'<div style="margin:30px"><img src="'+imgCode+'" width="600" height="500" /></div>',             
                position:Cesium.Cartesian3.fromDegrees(lon, lat),
                point : {
                    pixelSize : 5,
                    color : Cesium.Color.white
                },
                comments:'event'+id
            })
        },
        getWeiboRadiation(){//微波辐射
            this.clearStation()
            this.loading = true
            axios({
                method: 'GET',
                url: 'wind/show',
                responseType: 'json'
            }).then(res => {
                if(res.data && res.data.data.length){
                    this.loading = false
                    let wData = res.data.data
                    this.stationData = wData
                    // if(wData.length)
                    // this.mapView.camera.setView({destination:Cesium.Cartesian3.fromDegrees(wData[0].lon,wData[0].lat,30000000)});
                    this.$refs.zm.curMutipleValue = 4
                    this.$refs.zm.zoomUpOfMap()
                    wData.forEach(
                        (e,i,arr) => {
                            let codeUrl = 'wind/getMwv?name=20200401/'+e.zhanhao+'/2020-04-01_00-03-00_lv2_401.csv.png'
                            this.getCodeImage(codeUrl,'arraybuffer').then((img)=>{
                                this.addEntities(e.id,e.zhanhao,'',e.lon,e.lat,img)
                            })
                        }
                    )
                }
                else{
                    this.$message.error('微波辐射站点无数据！')
                    return
                }
            }).catch((e) => {
            })
        },
        getAutoStationData(){//自动站
            this.clearStation()
            this.loading = true
            axios({
                method: 'GET',
                url: 'instand/showl',
                responseType: 'json'
            }).then(res => {
                if(res.data && res.data.data.length){
                    this.loading = false
                    let autoData = res.data.data
                    this.stationData = autoData
                    this.$refs.zm.curMutipleValue = 4
                    this.$refs.zm.zoomUpOfMap()
                    autoData.forEach(
                        (e,i,arr) => {
                            let codeUrl = 'aotu/show?name=20200401/'+e.zhanhao+'/2020-04-01_00-03-00_lv2_401.csv.png'
                            this.getCodeImage(codeUrl,'arraybuffer').then((img)=>{
                                this.addEntities(e.iid,e.zhanhao,'',e.lon,e.lat,img)
                            })
                        }
                    )
                }
                else{
                    this.$message.error('自动站无数据！')
                    return
                }
            }).catch((e) => {
            })
        },
          getStationData(flag){
            if(flag == 3){
                this.getAutoStationData()
            }else if(flag == 4){
                this.getRadarData()
            }else if(flag == 5){
                this.getWeiboRadiation()
            }
          },
          imgPlayRootOn(countIndex,flag){
              this.getStationData(flag)
          }  
    }
}