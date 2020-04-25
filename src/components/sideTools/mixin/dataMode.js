import $ from 'jquery'
export default {
    mounted() {
        $(".dta .dta-item .dta-item-wrap .dta-item-a").click(function(){
            $(this).parent().find(".dta-item-a").removeClass("active");
            $(this).addClass("active");
        });
        $(".dta .dta-item .dta-item-wrap .data-squre").click(function(){
            $(this).parent().find(".data-squre").removeClass("active");
            $(this).addClass("active");
        });
    }
}