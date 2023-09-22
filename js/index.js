$(function (){
  // 슬릭 슬라이드
  $('.visual_slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    //header
    if ($(window).width() < 1024) {
      $('.out').hide();
      $('.mb').click(function(){
        $('.gnb').addClass('on')
      });
    }
})