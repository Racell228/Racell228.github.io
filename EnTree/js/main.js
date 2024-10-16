$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    dots: true
  });
});

$(document).ready(function() {
  $('.question_item').click(function(event) {
      event.preventDefault();
      $(this).find('.answer').toggle(400);
      $(this).find('.question_item_plus').toggleClass('question_item_plus_active');
  });
});
if (window.matchMedia("(max-width: 768px)").matches) {
  $(document).ready(function() {
  $('.differ_item').click(function(event) {
      event.preventDefault();
      $(this).find('.differ_answer').toggle(400);
      $(this).find('.differ_answer_plus').toggleClass('differ_answer_plus_active');
  });
});
}

$(document).ready(function() {
  $('.hero_download').click(function(event) {
      event.preventDefault();
      $('.window_book').toggle(400);
      $('html').addClass("hidden");
  });
});
$(document).ready(function() {
  $('.themes_btn').click(function(event) {
      event.preventDefault();
      $('.window_lesson').toggle(400);
      $('html').addClass("hidden");
  });
});
$(document).ready(function() {
  $('.window_close').click(function(event) {
      event.preventDefault();
      $('.window_book, .window_lesson').hide(400);
      $('html').removeClass("hidden");
  });
});
$(document).ready(function() {
  $('.lang').click(function(event) {
      event.preventDefault();
      $(this).addClass('lang_visible');
  });
});

$(document).click( function(e){
    if ( $(e.target).closest('.lang').length ) {
        // клик внутри элемента 
        return;
    }
    // клик снаружи элемента 
    $('.lang').removeClass('lang_visible');
});




$(window).scroll(function() {
  $('.up').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+950) {
       $(this).addClass("fadeInUp");
     }
     else {
      $(this).removeClass("fadeInUp");
     }
  });
});
$(window).scroll(function() {
  $('.down').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+950) {
       $(this).addClass("fadeInDown");
     }
     else {
      $(this).removeClass("fadeInDown");
     }
  });
});
$(window).scroll(function() {
  $('.anleft').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+950) {
       $(this).addClass("fadeInLeft");
     }
     else {
      $(this).removeClass("fadeInLeft");
     }
  });
});
$(window).scroll(function() {
  $('.anright').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+950) {
       $(this).addClass("fadeInRight");
     }
     else {
      $(this).removeClass("fadeInRight");
     }
  });
});