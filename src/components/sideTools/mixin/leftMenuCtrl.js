export default {
    mounted() {
        this.$nextTick(() =>{
            // $(".el-menu-vertical-demo").find(">li").hover(
            //     function(){
            //         var topfromScreen = $(this).offset().top
            //         if($(this).find(">.commonThird").length){
            //             $(this).find(">.commonThird").css({"top":topfromScreen+"px"})
            //         }
            //     },
            //     function(){
                    
            //     }
            // )
            $(".el-menu-vertical-demo").find(">li").hover(
                function(){
                    var topfromScreen = $(this).offset().top
                    if($(this).find(".commonThird").length){
                        $(this).find(".commonThird").css({"top":topfromScreen+"px"})
                    }
                },
                function(){
                    
                }
            )
        })
    },
    methods:{

    }
}