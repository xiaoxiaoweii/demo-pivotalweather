<template>
    <div class="map-floor">
            <div class="map-floor-wrap pza"></div>
            <div class="map-floor-wrap2">
                <el-collapse>
                    <el-collapse-item title="矢量图层"   name="1">
                        <div class="text"><div class="imgFloor imgFloor-eye"></div>&nbsp;&nbsp;中国省界&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="imgFloor imgFloor-list"></div>&nbsp;&nbsp;<div class="imgFloor imgFloor-close"></div></div>
                        <div class="text"><div class="imgFloor imgFloor-eye"></div>&nbsp;&nbsp;中国边界&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="imgFloor imgFloor-list"></div>&nbsp;&nbsp;<div class="imgFloor imgFloor-close"></div></div>
                        <div class="text"><div class="imgFloor imgFloor-eye"></div>&nbsp;&nbsp;全球国界&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="imgFloor imgFloor-list"></div>&nbsp;&nbsp;<div class="imgFloor imgFloor-close"></div></div>
                    </el-collapse-item>
                    <el-collapse-item  title="影像图层" name="2">
                        <div class="text"><div class="imgFloor imgFloor-eye"></div>&nbsp;&nbsp;合成图：强风暴&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="imgFloor imgFloor-list"></div>&nbsp;&nbsp;<div class="imgFloor imgFloor-close"></div></div>
                        <div class="colorBar">
                            <span class="a"></span>
                            <span class="b"></span>
                            <span class="c"></span>
                            <span class="d"></span>
                            <span class="e"></span>
                            <span class="f"></span>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            
        </div>
</template>
<script>

export default {
    
}
</script>>