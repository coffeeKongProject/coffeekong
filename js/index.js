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
      $('.best_one').addClass('on');
      $('.best_one.on').show();
      $('<a href="#" class="learnMore"></a>').prependTo('.best_one.on').css({display: "block"});
      $('<a href="#" class="favorite"></a>').appendTo('.best_one.on').css({display: "block"});
      $('.best_one_link').css({width: "0", height: "0"})
      if($('.best_one').mouseleave(function(){
        $('.best_one').removeClass('on');
        $('.learnMore').css({display: "none"});
        $('.favorite').css({display: "none"});
      }));
    }));

})