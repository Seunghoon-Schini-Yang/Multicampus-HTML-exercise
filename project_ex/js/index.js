/**
* index.js
**/

$(function(){
    $(window).on('scroll',function(){
        // scroll 되는 문서의 top이 #headerBox를 지나가면 메인메뉴가 #mainMenuBox가 고정되고 그림자가 표시
        if($(document).scrollTop() >= $('#headerBox').height()){
            $('#mainMenuBox').addClass('mainMenuFixed mainMenuShadow');
        }else{
            $('#mainMenuBox').removeClass('mainMenuFixed mainMenuShadow');
        }
    });

    $('#moveToTop').on('click',function(){
        $('html,body').animate({scrollTop:0},500) ;
    });
});