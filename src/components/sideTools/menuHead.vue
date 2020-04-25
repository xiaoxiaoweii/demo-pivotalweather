<template>
    <init-light>
            <div slot="wall" :class='{"wrap-sub-active":isSubShow}' class="wrap-sub" ></div>
            <div slot="back"  class="init-btn" ></div>
            <div slot="simple" class="simple-wrap" style="display:none">
                <ul >
                    <li>
                        <div class="lz"></div>
                        <img src="@/assets/images/pageInit/a1.png" alt="">
                        <span >综合监测</span>
                    </li>
                    <li data-sp="1">
                        <div class="lz"></div>
                        <img src="@/assets/images/pageInit/a4.png" alt="">
                        <span >预警预报</span>
                    </li>
                    <li data-sp="2">
                        <div class="lz"></div>
                        <img src="@/assets/images/pageInit/a5.png" alt="">
                        <span >对比检测</span>
                    </li>
                    <li data-sp="3">
                        <div class="lz"></div>
                        <img src="@/assets/images/pageInit/a6.png" alt="">
                        <span >查询统计</span>
                    </li>
                </ul>
            </div>
            <div data-open=0 slot="complex" class="complex-wrap" style="display:none">
                <div class="complex-pane"></div>
                <ul >
                    <li  data-sp="0" class="c-a">
                        <img src="@/assets/images/pageInit/a1.png" alt="">
                        <span style="display:none;" >综合监测</span>
                    </li>
                    <li  data-sp="1" class="c-b">
                        <img src="@/assets/images/pageInit/a4.png" alt="">
                        <span style="display:none;" >预警预报</span>
                    </li>
                    <li  data-sp="2" class="c-c">
                        <img src="@/assets/images/pageInit/a5.png" alt="">
                        <span style="display:none;" >对比检测</span>
                    </li>
                    <li  data-sp="3" class="c-d">
                        <img src="@/assets/images/pageInit/a6.png" alt="">
                        <span style="display:none;" >查询统计</span>
                    </li>
                </ul>
            </div>
            <button slot="hideSimple" style="display:none" class="hide-simple" @click="hideShowFunc"   ></button>
            <button slot="showSimple" style="display:none" class="show-simple" @click="showShowFunc" ></button>
        </init-light>
</template>
<script>
import Menu from '@/components/mixin/menu.js'
import InitLight from '@/components/tool/InitLight'
export default {
    data(){
        return {
            isSubShow:false,//背景变蓝
        }
    },
    mixins:[Menu],
    components:{
        InitLight
    },
    methods:{
        hideShowFunc(){},
        showShowFunc(){},
    }
}
</script>