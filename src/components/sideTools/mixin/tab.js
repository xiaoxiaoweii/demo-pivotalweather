export default {
    mounted() {
        $(".right-table .tab-item").click(function(){
            $(this).parent().find(".tab-item").removeClass("active");
            $(this).addClass("active");
        });
    }
}