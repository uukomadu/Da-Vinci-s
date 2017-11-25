$(function() {

  $(window).scroll(function(){
    $('.parallax-bg').css('background-position', '50% ' + ($(this).scrollTop() / 2) + 'px');
  })

  $('.home-hero h1').hide().fadeIn(2000);

  $(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    $('.desc-one').css({
      'transform' : 'translate(0px, -'+ wScroll /8 +'%)'
    });
    $('.pic-one img').css({
      'transform' : 'translate(0px, -'+ wScroll /30 +'%)'
    });
    $('.desc-two').css({
      'transform' : 'translate(0px, -'+ wScroll /8 +'%)'
    });
    $('.pic-two img').css({
      'transform' : 'translate(0px, -'+ wScroll /30 +'%)'
    });
  });
})
