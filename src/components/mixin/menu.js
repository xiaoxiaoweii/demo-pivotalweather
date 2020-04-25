import $ from "jquery"
export default {
    data(){
        return {
            pass:false
        }
    },
    mounted() {
        var t = this;
        let aaIndex = 0
            let aa = null
        $(".init-btn").on("click",function(){
            if(!t.pass){
                clearInterval(aa)
                $(".complex-wrap ul li img").each(function(){
                    $(this).next().hide()
                });
                var flag = $(".complex-wrap").attr("data-open")
            if(flag == '0'){
                $(".complex-wrap").show().css({"transform":"rotateZ(0deg)"});
                $(".complex-wrap").attr("data-open",1)
            }else{
                $(".complex-wrap").css({"transform":"rotateZ(-198deg)"});
                setTimeout(() => {
                    $(".complex-wrap").hide()
                }, 10);
                $(".complex-wrap").attr("data-open",0)
            }
            
            aaIndex = 0
            aa = setInterval(() => {
                if(aaIndex > 3){
                    $(".complex-wrap ul li img").each(function(){
                        $(this).next().removeClass("bounceIn animated")
                        //$(this).next().hide()
                    });
                    clearInterval(aa)
                    return
                }
                $(".complex-wrap ul li img").eq(aaIndex).next().show()
                $(".complex-wrap ul li img").eq(aaIndex).next().addClass("bounceIn animated")
                aaIndex ++

            }, 300);
                
            }
            
        });
        // $(".complex-wrap ul li img").hover(function(){
        //     $(this).parent().find("span").show()
        // },function(){
        //     $(this).parent().find("span").hide()
        // })
        $(".complex-wrap ul li img").on("click",function(){
            t.pass = true
            var index = $(this).parent().attr("data-sp");
            $(".complex-wrap").css({"transform":"rotateZ(-198deg)"});
            $(".complex-wrap").hide()
            setTimeout(() => {
                $(".simple-wrap").show();
                $(".simple-wrap").find("li").hide();
                $(".simple-wrap").find("li").eq(index).show();
                $(".hide-simple").show();
                $(".wrap-sub").addClass("wrap-sub-active");
                $(".left-bar").show()
            }, 0);
            
        })
        $(".hide-simple").click(()=>{
            $(".wrap-sub").hide()
            $(".init-btn").hide()
            $(".left-bar").hide()
            $(".simple-wrap").hide();
            $(".show-simple").css("left","8px")
            $(".show-simple").show()
            setTimeout(() => {
                $(".hide-simple").hide()
            }, 0);
        });
        $(".show-simple").click(function(){
            $(".wrap-sub").show()
            $(".init-btn").show()
            $(".left-bar").show()
            $(".simple-wrap").show();
            $(".show-simple").hide()
            setTimeout(() => {
                $(".hide-simple").show()
            }, 0);
        });

        this.$nextTick(()=>{
            $(".el-collapse-item__header").eq(0).prepend('<div class="pza"></div><div style="    margin-left: 20px;" class="imgFloor imgFloor-a"></div>&nbsp;&nbsp;')
            $(".el-collapse-item__header").eq(1).prepend('<div class="pza"></div><div style="    margin-left: 20px;" class="imgFloor imgFloor-b"></div>&nbsp;&nbsp;')
        })
    }
}