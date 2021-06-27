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

// services overlay
$(document).ready(function() {
  $('.advantages_item').click(function(event) {
      event.preventDefault();
      $(this).find('.advantages_item_hole').addClass('active');
      $(this).addClass('active')
      $('html').addClass('hidden');
      $.scrollify.disable();
  });
});
// blog slider
// $(document).ready(function(){
//   $('.blog_slider').slick({
//     slidesToShow: 3,
//     rows: 2,
//     slidesToScroll: 1,
//     margin: 10,
//     prevArrow: '<button type="button" class="left"></button>',
//     nextArrow: '<button type="button" class="right"></button>',
//     responsive: [
//     {
//       breakpoint: 481,
//       settings: {
//         slidesToShow: 1,
//         rows: 3,
//         margin: 10,
//       }
//     },
//     ]
//   });
// });
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
const inputs = document.querySelectorAll('input');
const container = document.querySelector('.select_text');

inputs.forEach(el => {
    el.addEventListener('click', () => {
        container.textContent = '';
        let input_checkeds = document.querySelectorAll('input:checked');

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
  $('.select').click(function(event) {
      $('.select_overlay').show(400);
      $('.select_label').addClass('active');
      $('.select_trigger').addClass('active');
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
      $('.form').show(400);
      $('header').removeClass('header_black');
      $('html').addClass('hidden');
      $('body').addClass('hidden');
      $.scrollify.disable();
  });
});
//close form
$(document).ready(function() {
  $('.form_close').click(function(event) {
    event.preventDefault();
      $('.form').hide(400);
      $('header').addClass('header_black');
      $('html').removeClass('hidden');
      $('body').removeClass('hidden');
      $.scrollify.enable();
  });
});
if (window.matchMedia("(max-width: 481px)").matches) {
$(document).ready(function(){
    $('.advantages_overlay').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
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
      $(id1).fadeIn(1000).siblings(0).fadeOut(0);
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