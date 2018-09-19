$(document).ready(function () {
    
    //해상도 600px 이하 메뉴바
    if ($(window).width() <= 600) {
        $(".menu_bar").click(function(){
            $(".pop_up_menu").css("display", "block");
        });
        $(".close").click(function(){
            $(".pop_up_menu").css("display", "none");
        });
    }
});