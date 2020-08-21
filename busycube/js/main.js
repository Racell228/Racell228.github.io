$(document).ready(function() {
  $('select').styler();
})
$(function() {
  var owl = $(".card_slider .owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    dots: true,
    nav: true,
  });
});
jQuery(document).ready(function($) {
  let outs = document.querySelectorAll('.card_slider');
  for (let out of outs) {
      let owl = out.querySelector('.owl-carousel');
      let btns = out.querySelectorAll(':scope .card_slider_nav_btn');
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
              $('.card_slider_nav_btn').removeClass('active')
              $(this).addClass('active');
          })
      }
  };

});
$(function() {
  var owl = $(".reviews_slider .owl-carousel");
  owl.owlCarousel({
    responsive : {
    // breakpoint from 0 up
    0 : {
        items: 1,
        margin: 30,
        dots: false,
        nav: true,
        center:true,
        loop: true,
    },
    769 : {
       items: 2,
       center:false,
       items: 2,
      margin: 30,
      dots: false,
      nav: true,
      center:true,
      loop: true,
    }
  }
  });
});
$(document).ready(function() {
  $('.overview_btn,.gift_btn,.production_btn,.card_btn,.warranty_btn').click(function(event) {
      event.preventDefault();
      $('.modal_form').show();
      $('html,body').addClass('hidden');
  });
});  
// $(document).mouseleave(function(e){
//     if (e.clientY < 10) {
//         $('.modal_exit').show();
//         $('html,body').addClass('hidden');
//     }    
// }); 
$(document).ready(function() {
  $('.footer_politic,.form_politic').click(function(event) {
      event.preventDefault();
      $('.modal_politic').show();
      $('html,body').addClass('hidden');
  });
});  
$(document).ready(function() {
  $('.present_fixed').click(function(event) {
      event.preventDefault();
      $('.modal_present').show();
      $('html,body').addClass('hidden');
  });
});  
$(document).ready(function() {
  $('.close_btn').click(function(event) {
      event.preventDefault();
      $('.modal_form,.modal_exit,.modal_politic,.modal_present').hide();
      $('html,body').removeClass('hidden');
  });
});  
jQuery(function($){
   $(".tel").mask("+7 (999) 999 - 99 - 99");
});
$(".video_holder").click(function() {
  $(this).find('.overlay').hide();
});



$(document).ready(function(){   
    var $element = $('#present');
    let counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop() + $(window).height();
  //Если скролл до конца елемента
  //var offset = $element.offset().top + $element.height();
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
  if (scroll > offset && counter == 0) {
    $('.present_fixed').addClass('present_fixed_show');
    counter = 1;
  }
});
});


$(document).ready(function(){   
    var $element = $('#present');
    let counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop() + $(window).height();
  //Если скролл до конца елемента
  var offset = $element.offset().top + $element.height() + 250;
  if (scroll > offset && counter == 0) {
    $('.present_fixed_text,.present_fixed_zigzag').hide();
    counter = 1;
  }
});
});