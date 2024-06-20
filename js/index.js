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
    };

    //베스트 상품
    if ($('.best_one').mouseenter(function(){
      $('.leanMore').addClass('on');
      $('.favorite').addClass('on');
      if ($('.leanMore').mouseenter(function(){
        $('.leanMore').addClass('on');
      }));
      if ($('.favorite').mouseenter(function(){
        $('.favorite').addClass('on');
      }));
    }));
    if ($('.best_one').mouseout(function(){
      $('.leanMore').removeClass('on');
      $('.favorite').removeClass('on');
      if ($('.leanMore').mouseenter(function(){
        $('.leanMore').addClass('on');
      }));
      if ($('.favorite').mouseenter(function(){
        $('.favorite').addClass('on');
      }));
    }));

})