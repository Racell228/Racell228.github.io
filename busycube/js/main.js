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
  $('.overview_btn').click(function(event) {
      event.preventDefault();
      $('.modal_form').show();
  });
});  
$(document).ready(function() {
  $('.gift_btn').click(function(event) {
      event.preventDefault();
      $('.modal_exit').show();
  });
});  
$(document).ready(function() {
  $('.close_btn').click(function(event) {
      event.preventDefault();
      $('.modal_form,.modal_exit').hide();
  });
});  
// var overlay = document.getElementById('overlay');
// var vid = document.getElementById('video');

// if(overlay.addEventListener){
//     overlay.addEventListener("click", play, false)
//   }else if(overlay.attachEvent){
//     overlay.attachEvent("onclick", play)
//   }

// function play() { 
//     if (vid.paused){
//         vid.play(); 
//         overlay.className = "o";
//     }else {
//         vid.pause(); 
//         overlay.className = "";
//     }
// } 

