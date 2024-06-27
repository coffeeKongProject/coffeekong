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

    //베스트 1
    if ($('.best_one').mouseenter(function(){
      $('.best_one').addClass('on');
      $('.best_one.on').show();
      $('<a href="#" class="learnMore one"></a>').prependTo('.best_one.on').css({display: "block"});
      $('<a href="#" class="favorite one"></a>').appendTo('.best_one.on').css({display: "block"});
      $('.best_one_link').css({width: "0", height: "0"})
      if($('.best_one').mouseleave(function(){
        $('.best_one').removeClass('on');
        $('.learnMore').css({display: "none"});
        $('.favorite').css({display: "none"});
      }));
    }));
    // 베스트 2
    if ($('.best_two').mouseenter(function(){
      $('.best_two').addClass('on');
      $('.best_two.on').show();
      $('<a href="#" class="learnMore two"></a>').prependTo('.best_two.on').css({display: "block"});
      $('<a href="#" class="favorite two"></a>').appendTo('.best_two.on').css({display: "block"});
      $('.best_two_link').css({width: "0", height: "0"})
      if($('.best_two').mouseleave(function(){
        $('.best_two').removeClass('on');
        $('.learnMore').css({display: "none"});
        $('.favorite').css({display: "none"});
      }));
    }));
    // 베스트 3
    if ($('.best_three').mouseenter(function(){
      $('.best_three').addClass('on');
      $('.best_three.on').show();
      $('<a href="#" class="learnMore three"></a>').prependTo('.best_three.on').css({display: "block"});
      $('<a href="#" class="favorite three"></a>').appendTo('.best_three').css({display: "block"});
      $('.best_three_link').css({width: "0", height: "0"})
      if($('.best_three').mouseleave(function(){
        $('.best_three').removeClass('on');
        $('.learnMore').css({display: "none"});
        $('.favorite').css({display: "none"});
      }));
    }));
    // 최적화 필요(간결히)
    
});
  
// 제품 에셋
$.ajax({
  type: "GET",
  url: "/coffeekong/js/product.json",
  dataType: "json",
  success: function (data) {
    var elem = "";
    console.log(data);
    $.each(data, function(i, obj){
      elem += `<div class="product">`
        elem += `<div class="pic">`
          elem += `<img src="${obj.img.imgUrl}" onclick="location.href='${obj.img.url}'" alt="${obj.img.imgAlt}">`
        elem += `</div>`
        elem += `<div class="textBox">`
          elem += `<a href="#">`
            elem += `<p class="store">${obj.textBox.store}</p>`
            elem += `<p class="p_name">${obj.textBox.p_name}</p>`
            elem += `<p class="price">${obj.textBox.price}</p>`
          elem += `</a>`
        elem += `</div>`
      elem += `</div>`
    });
    $('.p_wrap').prepend(elem);
  },
  error: function(xhr) {
    console.log(`${xhr.status}/${xhr.errorText}`);
  }
});
