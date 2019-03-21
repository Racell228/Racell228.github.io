$(document).ready(function() {
  $('.tabs__item:first-child').show();
  $('.categories__item').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
      var id = $(this).attr('href');
      $(id).fadeIn().siblings().fadeOut();
  });
});
$(document).ready(function() {
  $('.cyber__item:first-child').show();
  $('.cyber_cat__item').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
      var id = $(this).attr('href');
      $(id).fadeIn().siblings().fadeOut();
  });
});
$(document).ready(function() {
  $('.slide a').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
  });
});
$(document).ready(function() {
  $('.slide_m a').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
  });
});
$(document).ready(function() {
  $('.question1').click(function(event) {
      event.preventDefault();
      $('.answer1').toggleClass('answer').siblings().removeClass('answer');
  });
});
$(document).ready(function() {
  $('.question2').click(function(event) {
      event.preventDefault();
      $('.answer2').toggleClass('answer').siblings().removeClass('answer');
  });
});
$(document).ready(function() {
  $('.question3').click(function(event) {
      event.preventDefault();
      $('.answer3').toggleClass('answer').siblings().removeClass('answer');
  });
});
$(document).ready(function() {
  $('.question4').click(function(event) {
      event.preventDefault();
      $('.answer4').toggleClass('answer').siblings().removeClass('answer');
  });
});
$(document).ready(function() {
  $('.question5').click(function(event) {
      event.preventDefault();
      $('.answer5').toggleClass('answer').siblings().removeClass('answer');
  });
});
$(document).ready(function() {
  $('.question6').click(function(event) {
      event.preventDefault();
      $('.answer6').toggleClass('answer').siblings().removeClass('answer');
  });
});
$(document).ready(function() {
  $('.question7').click(function(event) {
      event.preventDefault();
      $('.answer7').toggleClass('answer').siblings().removeClass('answer');
  });
});
$(document).ready(function() {
  $('.question8').click(function(event) {
      event.preventDefault();
      $('.answer8').toggleClass('answer').siblings().removeClass('answer');
  });
});
$(document).ready(function() {
  $('.question9').click(function(event) {
      event.preventDefault();
      $('.answer9').toggleClass('answer').siblings().removeClass('answer');
  });
});
$(document).ready(function() {
  $('.question10').click(function(event) {
      event.preventDefault();
      $('.answer10').toggleClass('answer').siblings().removeClass('answer');
  });
});
$(document).ready(function() {
  $('.question11').click(function(event) {
      event.preventDefault();
      $('.answer11').toggleClass('answer').siblings().removeClass('answer');
  });
});
$(document).ready(function() {
  $('.question12').click(function(event) {
      event.preventDefault();
      $('.answer12').toggleClass('answer').siblings().removeClass('answer');
  });
});

jQuery(function(f){
    var element = f('#add');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 100 ? 'In': 'Out')](100);           
    });
}); 

$(document).ready(function(){
  $('.your-class').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });
});

$(document).ready(function() {
  $('.profile_player__item:first-child').show();
  $('.qqqq').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
      var id = $(this).attr('href');
      $(id).fadeIn().siblings().fadeOut();
  });
});
