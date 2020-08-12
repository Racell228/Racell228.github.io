$(document).ready(function() {
  $('select').styler();
})
$(function() {
  var owl = $(".card_slider .owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    dots: true,
    nav: true
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
          })
      }
  };

});
$(function() {
  var owl = $(".reviews_slider .owl-carousel");
  owl.owlCarousel({
    items: 2,
    margin: 30,
    dots: false,
    nav: true,
    center:true,
    loop: true
  });
});