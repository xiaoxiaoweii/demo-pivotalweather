<template>
        <div id="sidebar">
          <ul>
             <li v-for="(item,index) in sideList" :key="index">                    
                    <div class="icon"   :class="{'iconBg':clicked==index}" @click="getBg(index)">
                        <i :class="item.icon"></i>
                    </div>
                <div class="menu-text">{{item.title}}</div>
              </li> 
          </ul>
      </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
  },
  data(){
    return{
      //侧边栏
             clicked:0,
            sideList:[
                {
                    title:'位势高度',
                    icon:'iconfont icon-gaodu'
                },
                {
                    title:'相对湿度',
                    icon:'iconfont icon-shidu'
                },
                {
                    title:'温度',
                    icon:'iconfont icon-wendu'
                },
                {
                    title:'垂直速度',
                    icon:'iconfont icon-sudu'
                },
                {
                    title:'风场',
                    icon:'iconfont icon-feng'
                },
                {
                    title:'海平面气压',
                    icon:'iconfont icon-daqiyali'
                },
                {
                    title:'有效波高',
                    icon:'iconfont icon-boxingtu'
                }
            ]
    }
  },
  methods:{
      //侧边栏添加样式
      getBg(index){
        this.clicked = index;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*侧边工具栏*/
    #sidebar ul {
        position:absolute;
        top:100px;
        right:50px;
        /* z-index:9999; */
        list-style: none;
        text-decoration: none;
        width: 25px;
        margin-bottom: 25px;
        margin-top: 8px;
        font-size: 16px;
        align-self: flex-end;
        pointer-events: auto;
        display:block;
    }

    #sidebar ul::before {
        right: -7px;
        width: 25px;
        background-color: rgba(68,65,65,0.84);
        border-radius: 25px;
    }
    #sidebar ul::after {
        width: 100px;
        z-index: -10;
    }
     #sidebar ul::after,  #sidebar ul::before {
        position: absolute;
        top: -3px;
        bottom: -3px;
        right: -12px;
        content: ' ';
    }
    #sidebar ul li {
        padding: 0;
        margin: .15em 0;
        color: #fff3e1;
        cursor: pointer;
        transition: all .2s;
        -webkit-transition: all .2s;
        position: relative;
        margin: 0;
        display: block;
        list-style: none;
        font-weight: normal;
        padding: .31em 1.56em .31em .75em;
        white-space: nowrap;
    }
    #sidebar ul li i {
        height: 25px;
        width: 25px;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
    }
    .menu-text {
        height: 35px;
        -webkit-transition: background-color .3s;
        transition: background-color .3s;
        position: absolute;
        text-shadow: 0 0 4px black;
        line-height: 35px;
        padding:0 15px;
        margin-top: 1.5px;
        right: 22px;
        top: 0;
        border-radius: 1.2em;
        display: table-cell;
        vertical-align: middle;
    }
    /* #sidebar ul li i::before { */
    #sidebar ul li .icon {
        height: 25px;
        width: 25px;
        border-radius: 25px;
        text-align: center;
    }
    .iconBg{
        background-color: #d49500;
        box-shadow: 0 0 4px 0 black;
    }

</style>
