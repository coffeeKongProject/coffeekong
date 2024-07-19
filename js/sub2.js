$(function () {
    //header
    // 로그인 토글
    $('.id').click(function () {
        $('.login_form').toggle('slow');
        $('.login_form').css({ display: 'flex' });
        if ($('#id, #password').focusin()) {
            console.log("이벤트 감지");
            $('.id').off('click');
        } 
        // 기본적인 토글은 됐으면 좋겠는데 off() 때문에 뻐김
        // else if ($(this).focusout()) {
        //     console.log("커서 나감");
        //     $('.login_form').toggle('slow');
        //     $('.login_form').css({ display: 'none' });
        // }
    });
    // 모바일 헤더 
    if ($(window).width() < 1025) {
        $('.out').hide();
        $('.mb').click(function () {
            $('.gnb').toggle('slow')
        });
    }
});

/* ------------------------- */

// 리사이징
$(window).resize(function () {
    if ($(window).width() < 1025) {
        $('.out').hide();
    }
});

var lastWidth = $(window).width();
$(window).resize(function () {
    if ($(window).width() != lastWidth) {
        location.reload(); // 파이어폭스에서 리프레시 안됨
        window.location = window.location; // 리프레시 파이어폭스 브라우저 이슈 해결
        lastWidth = $(window).width();
        return false;
    }
});