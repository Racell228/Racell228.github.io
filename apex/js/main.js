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
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
  });
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