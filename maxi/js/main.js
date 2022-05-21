jQuery(function($) {
    jQuery(document).ready(function(){  
      $('.slider_top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        asNavFor: '.slider_desc',
      });
      $('.slider_desc').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider_top',
        arrows: true,
        dots: true,
        centerMode: true,
        infinite: true,
        variableWidth: false,
        focusOnSelect: true,
        prevArrow:'<button class="prev"></button>',
        nextArrow:'<button class="next"></button>',
        responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
      });
    }); 
});
$(document).ready(function() {
  $('.burger').click(function(event) {
    event.preventDefault();
      $('.modal').show(400);
  });
});
$(document).ready(function() {
  $('.modal_close').click(function(event) {
    event.preventDefault();
      $('.modal').hide(400);
  });
});



$(document).ready(function() {
  $('.register_content_item').click(function(){
    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(el).offset().top - 100}, 1000);
    return false;
  });
});