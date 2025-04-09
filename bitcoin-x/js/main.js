 $(document).ready(function(){
  $('.header_overlay').slick({
    slidesToShow: 5, 
    slidesToScroll: 1, 
    speed: 15000, 
    autoplay: true, 
    autoplaySpeed: 0,
    rtl:true,
    cssEase: 'linear',
    variableWidth: true,
    arrows: false
   
  });
});
 $(document).ready(function() {
  const btnOk = document.querySelector('.hero_video_play');
  const wrapperVideo = document.getElementById('video');

btnOk.addEventListener('click',function(){
  wrapperVideo.play();
  $(this).hide();
});


});



const employees = document.querySelector("#employees")
noUiSlider.create(employees, {
  start: 400,
  connect: [true, false],

  tooltips: {
    to: function(value) {
        return "€" + Math.trunc(value)  
    }
  },
  range: {
    'min': 250,
    '50%': 750,
    'max': 1500
  },
  
  pips: {
    mode: 'steps',
    filter: function (value, type) {
      return type === 0 ? -1 : 1;
    },
    format: {
      to: function (value) {
        return "€" + value;
      }
    }
  }
});
var calc_result = document.getElementById('calc_result');
 employees.noUiSlider.on('update', function (values, handle) {
     calc_result.innerHTML = "€" + Math.trunc(values[handle] * 3.5);
     
 });


 $(document).ready(function() {
  $('.faq_item').click(function(){
    $(this).find('.faq_answer').toggle(400);
    $(this).toggleClass('active');
  });
});

 $(document).ready(function() {
  $('.scroll').click(function(){
    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(el).offset().top + 100} , 1000);
    return false;
  });
});


if (window.matchMedia("(max-width: 480px)").matches) {
   $(document).ready(function(){
    $('.edge_overlay').slick({
      slidesToShow: 1, 
      slidesToScroll: 1, 
      prevArrow: '<button type="button" class="left"></button>',
      nextArrow: '<button type="button" class="right"></button>',
     
    });
  });
} else {

}


$(window).scroll(function() {
  $('.up').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+850) {
       $(this).addClass("animate__fadeInUp");
     }
     else {
      $(this).removeClass("animate__fadeInUp");
     }
  });
});
$(window).scroll(function() {
  $('.left').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+850) {
       $(this).addClass("animate__fadeInLeft");
     }
     else {
      $(this).removeClass("animate__fadeInLeft");
     }
  });
});
$(window).scroll(function() {
  $('.right').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+850) {
       $(this).addClass("animate__fadeInRight");
     }
     else {
      $(this).removeClass("animate__fadeInRight");
     }
  });
});