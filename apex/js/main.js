$(document).ready(function(){
  $('.about_body_overlay').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
  });
});
$(document).ready(function(){
  $('.pluses_slider').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
  });
});

// $(document).ready(function(){
//   $('.escort_slider').slick({
//     slidesToShow:1,
//     slidesToScroll: 1,
//     arrows: false,
//   });
// });
$(function() {
  var owl = $(".escort_slider .owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    dots: true,
    nav: true,
    navContainer: ".escort_slider_arrows",
    dotsContainer: '.escort_slider_nav',
  });
});
jQuery(document).ready(function($) {
  let outs = document.querySelectorAll('.escort_slider');
  for (let out of outs) {
      let owl = out.querySelector('.owl-carousel');
      let btns = out.querySelectorAll(':scope .escort_slider_nav_item');
      let owlJq = $(owl);
      owlJq.owlCarousel({
          items: 1,
          loop: false,
          margin: 10,
          nav: false,
          dots: false,
      });
      for (let btn of btns) {
          btn.addEventListener('click', function () {
              owlJq.trigger('to.owl.carousel', [$(this).index()]);
              $('.escort_slider_nav_item').removeClass('active')
              $(this).addClass('active');
          })
      }
  };

});
$(document).ready(function() {
  $('.info_nav_item').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(300).siblings(0).fadeOut(0);
  });
});
$(document).ready(function() {
  $('.recall-js').click(function(event) {
    event.preventDefault();
      $('.modal_recall').show(400);
  });
});
$(document).ready(function() {
  $('.modal_close').click(function(event) {
    event.preventDefault();
      $('.modal').hide(400);
  });
});




$(document).ready(function() {
    $('.form_item_input').on('keyup',function(){
      var $this = $(this),
          val = $this.val();
      if(val.length >= 1){
        $(this).parents('.form_item').find('.form_item_label').addClass('active');
      }else {
        $(this).parents('.form_item_overlay').find('.form_input_label').removeClass('active');
      }
    });
})


$(document).ready(function() {
  $('.burger,.header_burger').click(function(event) {
    event.preventDefault();
      $('.menu').show(400);
      $('.menu_bg_item').addClass('active');
  });
});
$(document).ready(function() {
  $('.menu_close').click(function(event) {
    event.preventDefault();
      $('.menu').hide(400);
      $('.menu_bg_item').removeClass('active');
  });
});
$('.escort_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log(nextSlide);
});

$(document).ready(function() {
  $('.reviews_item').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings(0).removeClass('active')
  });
});

$(document).ready(function(){
  $('.blog_slider').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
  });
});



$(function(f){
    var element = f('.top_arrow');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 1000 ? 'In': 'Out')](100);           
    });
}); 
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(300);
  return false;
}

if (window.matchMedia("(max-width: 481px)").matches) {
$(document).ready(function(){
    $('.reviews_overlay').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick_left slick_btn"></button>',
      nextArrow: '<button type="button" class="slick_right slick_btn"></button>'
    });
});

} else {
      $(window).scroll(function() {
      var height = $(window).scrollTop();
      if(height > 200){
      $('.info_nav').addClass('info_nav_fixed');
      } else{
        $('.info_nav').removeClass('info_nav_fixed');
      }
      });

      $(window).scroll(function() {
      var height = $(window).scrollTop();
      var top = $('.info_overlay').height();
      if(height > top ){
        $('.info_nav').addClass('info_nav_absolute');
      } else{
        $('.info_nav').removeClass('info_nav_absolute');
      }
      });


      $(window).scroll(function() {
      var height = $(window).scrollTop();
      var top = $('.info_overlay').height();
      if(height > top ){
        $('.info_nav').addClass('info_nav_absolute');
      } else{
        $('.info_nav').removeClass('info_nav_absolute');
      }
      });

}




$(document).ready(function() {
  $('.footer_links_item,.menu_item_link').click(function(){
    $('.menu').hide(400);
    $('.menu_bg_item').removeClass('active');
    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(el).offset().top - 100}, 1000);
    return false;
  });
});