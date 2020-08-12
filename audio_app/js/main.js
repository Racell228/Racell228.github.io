$(document).ready(function(){
  $('.books_item_overlay').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left slider_arrow"></button>',
    nextArrow: '<button type="button" class="right slider_arrow"></button>',
    responsive: [
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });
});
$(document).ready(function(){
  $('.reviews_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left_review slider_arrow"></button>',
    nextArrow: '<button type="button" class="right_rewiew slider_arrow"></button>',
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });
});
$(document).ready(function() {
  $('.questions_item').click(function(event) {
      event.preventDefault();
      $(this).find('.questions_item_answer').toggle();
      $(this).find('.questions_item_close').toggleClass('active');
  });
});
jQuery(document).ready(function() {
  jQuery(".scroll").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});
jQuery(document).ready(function() {
  jQuery(".scroll_nav").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});
$(document).ready(function() {
  $('.books_item').click(function(event) {
      event.preventDefault();
      $('.modal').show(400);
      $('html').addClass('html_hidden');
  });
}); 
$(document).ready(function() {
  $('.modal_close').click(function(event) {
      event.preventDefault();
      $('.modal').hide(400);
      $('html').removeClass('html_hidden');
  });
}); 
$(document).ready(function() {
  $('.mobile_burger').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active');
      $('.header_nav').toggleClass('header_nav_active');
      $('html').toggleClass('html_hidden');
  });
}); 
$(document).ready(function() {
  $('.scroll_nav').click(function(event) {
      $('.mobile_burger').removeClass('active');
      $('.header_nav').removeClass('header_nav_active');
      $('html').removeClass('html_hidden');
  });
}); 
const boxer = boxercontainer.querySelector("img"),
maxMove = boxercontainer.offsetWidth / 30,
boxerCenterX = boxer.offsetLeft + (boxer.offsetWidth / 2),
boxerCenterY = boxer.offsetTop + (boxer.offsetHeight / 2),
fluidboxer = window.matchMedia("(min-width: 726px)");

function getMousePos(xRef, yRef) {
  
  let panelRect = boxercontainer.getBoundingClientRect();
  return {
    x: Math.floor(xRef - panelRect.left) /(panelRect.right-panelRect.left)*boxercontainer.offsetWidth,
    y: Math.floor(yRef - panelRect.top) / (panelRect.bottom -panelRect.top) * boxercontainer.offsetHeight
    };
}

document.body.addEventListener("mousemove", function(e) {
  let mousePos = getMousePos(e.clientX, e.clientY),
  distX = mousePos.x - boxerCenterX,
  distY = mousePos.y - boxerCenterY;
  if (Math.abs(distX) < 500 && distY < 200 && fluidboxer.matches) {
  boxer.style.transform = "translate("+(-1*distX)/12+"px,"+(-1*distY)/12+"px)";
    boxercontainer.style.backgroundPosition = `calc(50% + ${distX/50}px) calc(50% + ${distY/50}px)`;
  }
})