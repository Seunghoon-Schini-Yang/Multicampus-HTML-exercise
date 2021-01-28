/**
* slideShow.js
**/
$(function(){
    // 이동한 이미지의 index 값 저장 (현재 보고있는 이미지-현재위치)
    var movedIndex=0;

    // slidePanel을 움직여주는 함수
    function moveSlide(index) {
        // 전달받은 index 값을 movedIndex에 저장
        movedIndex = index; // 전역변수
        // slide 이동
        var moveLeft = -(index * 1280);
        $('slidePanel').animate({'left':moveLeft},'slow');
    };

    // prev button click 하면 앞으로 이동
    $('#prevButton').on('click',function() {
        // button click 시 보여줘야할 image의 index 결정해서
        if(movedIndex != 0) // 첫번째(0변 index) image가 아니라면
            movedIndex -= 1; // 현재 image 이전 image의 index로 설정

        // moveSlide() 호출
        moveSlide(movedIndex);
    });

    // next button click 하면 뒤로 이동
    $('#nextButton').on('click',function() {
        if(movedIndex != 4) // 마지막(4번 index) image가 아니라면
            movedIndex += 1;
        // moveSlide() 호출
        moveSlide(movedIndex);
    });

    /* control button */
    $('.controlPanel').each(function(index){
        $(this).hover(
            function(){ // 마우스 올렸을 때 이미지 변경
                $(this).attr('src','image/controlButton2.png');
            },
            function(){ // 마우스 뗐을 때 이미지 변경
                $(this).attr('src','image/controlButton1.png');
            }
        );

        // 클릭했을 때, 현재 index 값을 moveSlide() 함수에게 전달
        $(this).on('click',function(){

        });
    });

});