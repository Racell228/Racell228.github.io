
$(function() {
  var owl = $(".home_slider .owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    dots: true,
    nav: true
  });
});
$(function() {
  var owl = $(".product_slider .owl-carousel");
  owl.owlCarousel({
    items: 5,
    margin: 10,
    dots: false,
    nav: true
  });
});

$(function() {
  var owl = $(".news_slider .owl-carousel");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    dots: false,
    nav: true
  });
});
$(document).ready(function() {
  $('.categories__sliders_item:first-child').show();
  $('.product_nav-link').click(function(event) {
      event.preventDefault();
      $(this).addClass('product_nav_link-active').siblings().removeClass('product_nav_link-active');
      var id = $(this).attr('href');
      $(id).fadeIn(0).siblings(0).fadeOut(0);
  });
});


$(document).ready(function() {
  $('.header__basket_link').click(function(event) {
      event.preventDefault();
      $(this).addClass('header_basket_full');
      $('.bascket_num').addClass('bascket_num_active');
      $('.basket__modal_full').show();
  });
});

jQuery(function($){
  $(document).mouseup(function (e){
    var div = $(".basket__modal_full"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
      div.hide(); 
    };
    $('.header__basket_link').removeClass('header_basket_full');
    $('.bascket_num').removeClass('bascket_num_active');
  });
});


// $(document).ready(function() {
//   $('.header__basket_link').click(function(event) {
//       event.preventDefault();
//       $(this).addClass('header_basket_empty');
//       $('.bascket_num').addClass('bascket_num_active');
//       $('.basket__modal_empty').show();
//   });
// });

// jQuery(function($){
//   $(document).mouseup(function (e){
//     var div = $(".basket__modal_empty"); 
//     if (!div.is(e.target) 
//         && div.has(e.target).length === 0) { 
//       div.hide(); 
//     };
//     $('.header__basket_link').removeClass('header_basket_empty');
//     $('.bascket_num').removeClass('bascket_num_active');
//   });
// });




var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function(input){
  var label  = input.nextElementSibling,
      labelVal = label.innerHTML;
  input.addEventListener('change', function(e){
    var fileName = '';
    if( this.files && this.files.length > 1 )
      fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    else
      fileName = e.target.value.split( '\\' ).pop();
    if( fileName )
      label.querySelector( 'span' ).innerHTML = fileName;
    else
      label.innerHTML = labelVal;
  });
});





$(function() {

  $('select').styler();

});