//scroll sections
$.scrollify({
    section : "section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 300,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    after:function() {},
    afterResize:function() {},
    before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");
      $(".header_nav .active").removeClass("active");
      $(".header_nav").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
    //   var pagination = "<div class=\"pagination\">";
    //   var activeClass = "";
    //   $(".panel").each(function(i) {
    //   activeClass = "";
    //   if(i===0) {
    //     activeClass = "active";
    //   }
    //   pagination += "<a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</a>";
    // });
    // pagination += "</div>";
    // $(".header_nav").append(pagination);
    $(".header_nav a").on("click",function() {
      $.scrollify.move($(this).attr("href"));
    });
    $(".header_nav a").on("click",$.scrollify.move);
  }
});


// header scroll styles
$(window).scroll(function() {
var height = $(window).scrollTop();
var d = document.getElementById("advantages");
var topPos = d.offsetTop;
if(height > topPos){
  $('header').addClass('header_back');
} else{
  $('header').removeClass('header_back');
}
});
// header scroll styles
$(window).scroll(function() {
  var height = $(window).scrollTop();
  var d = document.getElementById("blog");
  var topPos = d.offsetTop;
  if(height > topPos){
    $('header').addClass('header_black');
    $('header').removeClass('header_back');
  } else{
    $('header').removeClass('header_black');
  }
});
// header scroll styles
$(window).scroll(function() {
  var height = $(window).scrollTop();
  var d = document.getElementById("contacts");
  var topPos = d.offsetTop;
  if(height > topPos){
    $('header').removeClass('header_black');
    $('header').removeClass('header_back');
  } else{
    
  }
});
// checked inputs
$(document).ready(function() {
const inputs = document.querySelectorAll('.select_option1');
const container = document.querySelector('.select_text1');

inputs.forEach(el => {
    el.addEventListener('click', () => {
        container.textContent = '';
        let input_checkeds = document.querySelectorAll('.select_option1:checked');

        input_checkeds.forEach(el_checked => {
            container.insertAdjacentHTML('beforeend', el_checked.value);
        });
    });
});  
})

$(document).ready(function() {
const inputs = document.querySelectorAll('.select_option2');
const container = document.querySelector('.select_text2');

inputs.forEach(el => {
    el.addEventListener('click', () => {
        container.textContent = '';
        let input_checkeds = document.querySelectorAll('.select_option2:checked');

        input_checkeds.forEach(el_checked => {
            container.insertAdjacentHTML('beforeend', el_checked.value);
        });
    });
});  
})
// placeholders
$(document).ready(function() {
  $('.form_input').on('click', function(){
    $(this).parent().find('.form_input_label').removeClass('labelStart');
    $(this).parent().find('.form_input_label').addClass('active');
  });

$('.form_input').blur(function() {
   if(!$.trim(this.value).length) {
    $(this).parent().find('.form_input_label').removeClass('active');
    $(this).parent().find('.form_input_label').addClass('labelStart');
   }
  });
});
//select open
$(document).ready(function() {
  $('.select_trigger').click(function(event) {
      $(this).parent().find('.select_overlay').toggle(400);
      $(this).parent().find('.select_label').addClass('active');
      $(this).toggleClass('active');
  });
});

//select close
$(function($){
  $(document).mouseup(function (e){
    var div = $(".select"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
      div.find('.select_overlay').hide(400); 
      $('.select_trigger').removeClass('active');
    }
  });
});
//open form
$(document).ready(function() {
  $('.contacts_right_btn').click(function(event) {
    event.preventDefault();
      $('.form').show(200);
      $('header').removeClass('header_black');
      $('header').addClass('header_white');
      $('html').addClass('hidden');
      $('body').addClass('hidden');
      $.scrollify.disable();
      $('.form').addClass('form_active');
  });

});
$(document).ready(function() {
  $('.hero_btn').click(function(event) {
    $('.form').show(200);
      $('.form').addClass('form_active');
      $('header').addClass('header_white');
      $('header').removeClass('header_black');
      $('html').addClass('hidden');
      $('body').addClass('hidden');
      $.scrollify.disable();
  $('html,body').animate({
    scrollTop: $('.contacts').offset().top}, 1000);
  return false;
  });
});
//close form
$(document).ready(function() {
  $('.form_close,.header_logo').click(function(event) {
    event.preventDefault();
      $('.form').hide(200);
      $('html').removeClass('hidden');
      $('body').removeClass('hidden');
      $.scrollify.enable();
      $('header').removeClass('header_white');
      $('header').addClass('header_black');
      $('.form').removeClass('form_active');
  });
});
if (window.matchMedia("(max-width: 481px)").matches) {
$(document).ready(function(){
    $('.advantages_overlay').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      prevArrow: '<button type="button" class="slick_left slick_btn"></button>',
      nextArrow: '<button type="button" class="slick_right slick_btn"></button>'
    });
});
$(document).ready(function() {
  $('.details_text_overlay:first-child').show();
  $('.details_text_nav_item').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(300).siblings(0).fadeOut(0);
  });
});
} else {
  /* the viewport is less than 400 pixels wide */
}


$(document).ready(function() {
  $('.burger,.burger_black').click(function(event) {
    event.preventDefault();
      $('.mobile_burger').show(400);
      $('html').addClass('hidden');
      $('body').addClass('hidden');
  });
});
$(document).ready(function() {
  $('.mobile_burger_head_close,.header_nav a').click(function(event) {
    event.preventDefault();
      $('.mobile_burger').hide(400);
      $('html').removeClass('hidden');
      $('body').removeClass('hidden');
  });
});
$(document).ready(function(){
  $('.hero_partners').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    margin: 10,
    arrows:false,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    responsive: [
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
      }
    },
    ]
  });
});
$(document).ready(function(){
  $('.details_partners').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 10,
    arrows:false,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    responsive: [
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
      }
    },
    ]
  });
});

