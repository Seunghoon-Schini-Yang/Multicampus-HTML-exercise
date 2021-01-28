/**
* formCheck.js
* 회원가입 폼 입력 확인
**/

$(document).ready(function(){
    $('#id').focus(); // 시작 시 id에 focus
    // input 텍스트 입력란과 비밀번호 입력란에 focus 있을 때 색상 변경
    $('input[type="text"], input[type="password"]').on('focus',function(){
       $(this).css('background-color','rgb(232,232,232)');
    });

    // foucs 잃을 때 (blur)
    $(':text,:password').on('blur',function(){
       $(this).css('background-color','white');
    });

    // keyboard event
    // 첫번째 번호 입력란에서 입력값이 3개가 되면
    $('#hp1').on('keyup',function(){
        if($(this).val().length==3)
            $('#hp2').focus();
    });
    $('#hp2').on('keyup',function(){
        if($(this).val().length==4)
            $('#hp3').focus();
    });

    // enter key를 눌렀을 때 무조건 submit가 발생하므로
    // 문서의 enter key event를 false로 제거
    // [Enter] key의 아스키코드값 : 13
    $(document).on('keydown',function(e){
        if(e.keyCode==13) return false;
    });

    // id 입력 후 enter key를 눌렀을 때 password로 focus 이동
    $('#id').on('keydown',function(e){
        if($('#id').val() != "" && e.keyCode == 13)
            $('#pwd').focus();
    });


    // newMemberForm의 submit(전송) 버튼 누를 때
    $('#newMemberForm').on('submit',function(){
        if($('#id').val()==""){ // id 입력하지 않은 경우
            alert("id를 입력하세요.");
            $('#id').focus(); // 이 code 만으로는 submit 가 발생
            return false; // server로 전송되지 않도록 전송기능을 막는 code
        };
        if($('#pwd').val()==""){ // pwd 입력하지 않은 경우
            alert("password를 입력하세요.");
            $('#pwd').focus(); // 이 code 만으로는 submit 가 발생
            return false; // server로 전송되지 않도록 전송기능을 막는 code
        };

        if(!$('input[type="radio"]').is(':checked')){ // radio button에 체크되지 않으면
            alert("학년을 선택하세요.");
            return false; // server로 전송되지 않도록 전송기능을 막는 code
        };
        if(!$('input[type="checkbox"]').is(':checked')){ // checkbox 에 체크되지 않으면
            alert("관심분야는 1개 이상 선택하세요.");
            return false; // server로 전송되지 않도록 전송기능을 막는 code
        };
        if($('select').val()==""){
            alert("학과를 선택하세요.");
            $('select').focus(); // 이 code 만으로는 submit 가 발생
            return false; // server로 전송되지 않도록 전송기능을 막는 code
        };
    });
});