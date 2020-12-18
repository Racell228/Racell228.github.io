$(document).ready(function(){
  $('.news_slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="left_arrow slider_arrow"></button>',
    nextArrow: '<button type="button" class="right_arrow slider_arrow"></button>',
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });
});
$(document).ready(function(){
  $('.example_slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="left_arrow slider_arrow"></button>',
    nextArrow: '<button type="button" class="right_arrow slider_arrow"></button>',
    responsive: [
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });
});
$(document).ready(function(){
  $('.experience_slider').slick({
    slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	centerMode: true,
	variableWidth: true,
	infinite: true,
	focusOnSelect: true,
	cssEase: 'linear',
	touchMove: true,
    prevArrow: '<button type="button" class="left_arrow slider_arrow"></button>',
    nextArrow: '<button type="button" class="right_arrow slider_arrow"></button>',
    responsive: [
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        infinite: false,
      }
    }
  ]
  });
});

$(document).ready(function() {
  $('.question_item').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active');
      $(this).find('.question_item_answer').toggle(400);
      $(this).find('.question_item_question_arrow').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.safety_text_nav_item1').click(function(event) {
      event.preventDefault();
      	$('.safety_text_contant').hide(400);
  		$('.safety_text_contant1').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});  
$(document).ready(function() {
  $('.safety_text_nav_item2').click(function(event) {
      event.preventDefault();
      	$('.safety_text_contant').hide(400);
  		$('.safety_text_contant2').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});  
$(document).ready(function() {
  $('.safety_text_nav_item3').click(function(event) {
      event.preventDefault();
      	$('.safety_text_contant').hide(400);
  		$('.safety_text_contant3').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});
$(document).ready(function() {
  $('.info_btn').click(function(event) {
      event.preventDefault();
  		$('.info_item').toggleClass('active');
  });
}); 
$(document).ready(function() {
  $('.question_btn').click(function(event) {
      event.preventDefault();
  		$('.question_item').toggleClass('showall');
  });
}); 

if (window.matchMedia("(max-width: 480px)").matches) {
    $(document).ready(function(){
    $('.info_overlay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      dots: false,
      prevArrow: '<button type="button" class="left_arrow slider_arrow"></button>',
      nextArrow: '<button type="button" class="right_arrow slider_arrow"></button>',
    });
  });
} else {
  /* the viewport is less than 400 pixels wide */
}
$(document).ready(function() {
  $('.header_burger').click(function(event) {
      event.preventDefault();
        $(this).toggleClass('active');
        $('.mobile_overlay').toggleClass('active');
        $('html,body').toggleClass('hidden');
  });
});  
$(document).ready(function() {
  $('.safety_text_contant_btn').click(function(event) {
      event.preventDefault();
        $(this).parent().find('.modal').show();
        $('html,body').addClass('hidden');
  });
});  


$(document).ready(function() {
  $('.close_modal').click(function(event) {
      event.preventDefault();
        $('.modal').hide();
        $('html,body').removeClass('hidden');
  });
});  