$(document).ready(function() {
  $('.header__items_right-menu').click(function(event) {
      event.preventDefault();
      $('.burger_menu').toggle(400);
      $('.header__items_right-menu-show').toggle();
      $('.header__items_right-menu-close').toggle();
	  $('body,html').toggleClass('overflow');
  });
});
$(document).ready(function() {
  $('.filter_link').click(function(event) {
      event.preventDefault();
      $('.filter_variants-overlay').toggle(400);
      $(this).find('.category_arrow-down').toggleClass('arrow_rotate');
  });
}); 

$(document).ready(function() {
  $('.service_link').click(function(event) {
      event.preventDefault();
      $('.filter_services-overlay').toggle(400);
      $(this).find('.category_arrow-down').toggleClass('arrow_rotate');
  });
});  
$(document).ready(function() {
  $(".down-arrow").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});
if(window.matchMedia('(max-width: 768px)').matches){
  $(document).ready(function() {
  $('.project_details-credits').click(function(event) {
      event.preventDefault();
      $(this).find('ul').toggle(400);
      $(this).find('.project_items-title').toggleClass('project_items-title-active');
  });
});  

$(document).ready(function() {
  $('.project_details-awards').click(function(event) {
      event.preventDefault();
      $(this).find('ul').toggle(400);
      $(this).find('.title_768').toggleClass('project_items-title-active');
  });
});  
}
if(window.matchMedia('(min-width: 835px)').matches){
$('.project_item_slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  nav:false,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
}
$('audio').initAudioPlayer();


var overlay = document.getElementById('overlay');
var vid = document.getElementById('video');

if(overlay.addEventListener){
    overlay.addEventListener("click", play, false)
  }else if(overlay.attachEvent){
    overlay.attachEvent("onclick", play)
  }

function play() { 
    if (vid.paused){
        vid.play(); 
        overlay.className = "o";
        $('#video').attr("controls", "controls");
    }else {
        vid.pause(); 
        overlay.className = "";
        $('#video').removeAttr("controls", "controls");
    }
} 