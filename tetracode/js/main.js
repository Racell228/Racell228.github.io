//scroll sections
$.scrollify({
    section : "section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 700,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    after:function() {},
    afterResize:function() {},
    before:function() {},
    afterRender:function() {
    $(".header_nav a").on("click",function() {
      $.scrollify.move($(this).attr("href"));
    });
    $(".header_nav a").on("click",$.scrollify.move);
  }
});
//end scroll sections


//fixed header
$(window).scroll(function() { 
    var the_top = $(document).scrollTop();
    if (the_top > 500) {
        $('header').addClass('active');
    }
    else {
        $('header').removeClass('active');
    }
});
//end fixed header

//hero image animation
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
  boxer.style.transform = "translate("+(-1*distX)/12+"rem,"+(-1*distY)/12+"rem)";
    boxercontainer.style.backgroundPosition = `calc(50% + ${distX/50}rem) calc(50% + ${distY/50}rem)`;
  }
})
//End hero image animation

//Factors Slider
$(document).ready(function() {
  $('.factors_text_block').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows:false,
      vertical:true,
  });
});
//end Factors Slider

//Factors & Choose Scroll
$('.factors,.choose').on('wheel', (function(e) {
  e.preventDefault();
  e.stopPropagation();
  var currentSlideStart = $(this).find('.slider').slick('slickCurrentSlide');
  var currentSlide = currentSlideStart + 1;
  var CountSlides = $(this).find('.slider_item').length;
  if (e.originalEvent.deltaY > 0 && CountSlides > currentSlide) {
    $(this).find('.slider').slick('slickNext');
  
  } else if (e.originalEvent.deltaY > 0 && CountSlides == currentSlide) {
    $.scrollify.next();

  }  else if (e.originalEvent.deltaY < 0 && 1 == currentSlide) {
    $.scrollify.previous();

  } else if (e.originalEvent.deltaY < 0) {
    $(this).find('.slider').slick('slickPrev');

  } 

}));
//End Factors & Choose Scroll

 //Steps Scroll & Dots
$('.steps').on('wheel', (function(e) {
  e.preventDefault();
  e.stopPropagation();
  var currentSlideStart = $(this).find('.slider').slick('slickCurrentSlide');
  var currentSlide = currentSlideStart + 2;
  var CountSlides = $(this).find('.slider_item').length;
  if (e.originalEvent.deltaY > 0 && CountSlides > currentSlide) {
    $(this).find('.slider').slick('slickNext');
  
  } else if (e.originalEvent.deltaY > 0 && CountSlides == currentSlide) {
    $.scrollify.next();

  }  else if (e.originalEvent.deltaY < 0 && 2 == currentSlide) {
    $.scrollify.previous();

  } else if (e.originalEvent.deltaY < 0) {
    $(this).find('.slider').slick('slickPrev');
  } 

}));

$(document).ready(function() {
  var $Slider = $('.steps_wrapper').slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows:false,
      variableWidth:true,
  });
  $('.steps_wrapper').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var StepsCurrent = $Slider.slick('slickCurrentSlide');
    var StepsCurrentItem = StepsCurrent + 1;
    var curentDot = document.querySelector(`div[data-item='${StepsCurrentItem}']`);
    $(curentDot).addClass('on').siblings().removeClass('on');
  });
  $('.steps_dots_item_overlay').on('click', function(e) {
      var slideIndex = $(this).data('item');
      $(this).addClass('on').siblings().removeClass('on');
      $Slider.slick( 'slickGoTo', parseInt( slideIndex ) - 1 );
      e.preventDefault();
  });
});
//End Steps Scroll & Dots


//Choose Slider
$(document).ready(function() {
  $('.choose_items').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows:false,
      variableWidth:true,
      easing: 'easeOutElastic',
  });
    
});
//End Choose Slider


//start Focus Animation via scroll
$(window).scroll(function() { 
    var the_top = $(document).scrollTop();
    cPos = $('.ready').offset().top;
    if (the_top > cPos) {
        $('#planning').addClass('active');
    }
    else {
      $('#planning').removeClass('active');
    }
});
//End Focus Animation via scroll


//Focus navigation 
$(document).ready(function() {
  $('.focus_nav_item').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).show().siblings().hide();
      $(id1).addClass('active').siblings().removeClass('active');
      classCheck();
      classCheckThird();
  });
});
//End Focus navigation 


//Check class for Third Animation
function classCheckThird(){
 const elementClass = document.querySelector('.focus_animate_item_third');
 if(elementClass.classList.contains('active')){
  allThird();
 }
 else {
    $('.focus_animate_item_third_code_wrapper img').removeClass('active');
    $('.focus_animate_item_third_content_head img').removeClass('active');
    $('.focus_animate_item_third_content_bottom img').removeClass('active');
  }
}
//End Check class for Third Animation

//Third Animation 
function allThird() {
  function item1() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(1)').addClass('active');
  }
  function item2() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(2)').addClass('active');
  }
  function item3() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(3)').addClass('active');
  }
  function item4() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(4)').addClass('active');
  }
  function item5() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(5)').addClass('active');
  }
  function item6() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(6)').addClass('active');
  }
  function item7() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(7)').addClass('active');
  }
  function item8() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(8)').addClass('active');
  }
  function item9() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(9)').addClass('active');
  }
  function item10() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(10)').addClass('active');
  }
  function item11() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(11)').addClass('active');
  }
  function item12() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(12)').addClass('active');
  }
  function item13() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(13)').addClass('active');
  }
  function item14() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(14)').addClass('active');
  }
  function item15() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(15)').addClass('active');
  }
  function item16() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(16)').addClass('active');
  }
  function item17() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(17)').addClass('active');
  }
  function item18() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(18)').addClass('active');
  }
  function item19() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(19)').addClass('active');
  }
  function item20() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(20)').addClass('active');
  }
  function item21() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(21)').addClass('active');
  }
  function item22() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(22)').addClass('active');
  }
  function item23() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(23)').addClass('active');
  }
  function item24() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(24)').addClass('active');
  }
  function item25() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(25)').addClass('active');
  }
  function item26() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(26)').addClass('active');
  }
  function item27() {
    $('.focus_animate_item_third_code_wrapper img:nth-child(27)').addClass('active');
  }
  function item28() {
    $('.focus_animate_item_third_content_head img').addClass('active');
  }
  function item29() {
    $('.focus_animate_item_third_content_bottom img').addClass('active');
  }
  
  setTimeout(item1, 50);
  setTimeout(item2, 100);
  setTimeout(item3, 150);
  setTimeout(item4, 200);
  setTimeout(item5, 250);
  setTimeout(item6, 300);
  setTimeout(item7, 350);
  setTimeout(item8, 400);
  setTimeout(item9, 450);
  setTimeout(item10, 500);
  setTimeout(item11, 550);
  setTimeout(item12, 600);
  setTimeout(item13, 650);
  setTimeout(item14, 700);
  setTimeout(item15, 750);
  setTimeout(item16, 800);
  setTimeout(item17, 850);
  setTimeout(item18, 900);
  setTimeout(item19, 950);
  setTimeout(item20, 1000);
  setTimeout(item21, 1050);
  setTimeout(item22, 1100);
  setTimeout(item23, 1150);
  setTimeout(item24, 1200);
  setTimeout(item25, 1250);
  setTimeout(item26, 1300);
  setTimeout(item27, 1350);
  setTimeout(item28, 2000);
  setTimeout(item29, 2000);
};
//End Third Animation 


//Focus Animation Four Class Check
function classCheck(){
 const elementClass = document.querySelector('.focus_animate_item_four');
 if(elementClass.classList.contains('active')){
  all();
 }
 else {
    $('.diversity_img').removeClass('active');
  }
}
//End Focus Animation Four Class Check

//Focus Animation Four
function all() {
  function item1() {
    $('.diversity1').addClass('active');
  }
  function item2() {
    $('.diversity2').addClass('active');
  }
  function item3() {
    $('.diversity3').addClass('active');
  }
  function item4() {
    $('.diversity4').addClass('active');
  }
  function item5() {
    $('.diversity5').addClass('active');
  }
  function item6() {
    $('.diversity6').addClass('active');
  }
  function item7() {
    $('.diversity7').addClass('active');
  }
  function item8() {
    $('.diversity8').addClass('active');
  }
  function item9() {
    $('.diversity9').addClass('active');
  }
  function item10() {
    $('.diversity10').addClass('active');
  }
  function item11() {
    $('.diversity11').addClass('active');
  }
  setTimeout(item1, 500);
  setTimeout(item2, 1000);
  setTimeout(item3, 1500);
  setTimeout(item4, 2000);
  setTimeout(item5, 2500);
  setTimeout(item6, 3000);
  setTimeout(item7, 3500);
  setTimeout(item8, 4000);
  setTimeout(item9, 4500);
  setTimeout(item10, 5000);
  setTimeout(item11, 5500);

};
//End Focus Animation Four

//Tech Navigation
$(document).ready(function() {
  $('.tech_nav_item').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).show().siblings().hide();
  });
});
//End Tech Navigation

//Reviews Slider
$(document).ready(function() {
  $('.reviews_overlay').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows:true,
      variableWidth: true,
      prevArrow: '<button type="button" class="left"></button>',
      nextArrow: '<button type="button" class="right"></button>',
  });
});
//End Reviews Slider


//Cases Slider
$(document).ready(function() {
  $('.cases_overlay').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows:false,
      variableWidth:true,
  });
});
//end Cases Slider


//Cases Scroll
$('.cases').on('wheel', (function(e) {
  e.preventDefault();
  e.stopPropagation();
  var currentSlideStart = $(this).find('.slider').slick('slickCurrentSlide');
  var currentSlide = currentSlideStart + 3;
  var CountSlides = $(this).find('.slider_item').length;
  if (e.originalEvent.deltaY > 0 && CountSlides > currentSlide) {
    $(this).find('.slider').slick('slickNext');
  
  } else if (e.originalEvent.deltaY > 0 && CountSlides == currentSlide) {
    $.scrollify.next();

  }  else if (e.originalEvent.deltaY < 0 && 3 == currentSlide) {
    $.scrollify.previous();

  } else if (e.originalEvent.deltaY < 0) {
    $(this).find('.slider').slick('slickPrev');

  } 
}));
//End Cases Scroll

//Add File to form
$(document).ready( function() {    
    $(".discuss_form_file_input").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#filename").text(filename);
         $("#filename").addClass('active');
    });
    $('#filename').click(function(event) {
      $(".discuss_form_file_input").val('');
      $(this).removeClass('active');
      $(this).text('');
    }); 
});
//End Add File to form

//Form placeholders
$(document).ready(function() {
  $('.discuss_form_input').on('click', function(){
    $(this).parent().find('.discuss_form_label').addClass('active');
  });

$('.discuss_form_input').blur(function() {
   if(!$.trim(this.value).length) {
    $(this).parent().find('.discuss_form_label').removeClass('active');
   }
  });
});
//End Form placeholders










