$(document).ready(function() {
  $('.tabs__item:first-child').show();
  $('.categories__item').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
      var id = $(this).attr('href');
      $(id).fadeIn(0).siblings().fadeOut(0);
  });
});
$(document).ready(function() {
  $('.cyber__item:first-child').show();
  $('.cyber_cat__item').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
      var id = $(this).attr('href');
      $(id).fadeIn(0).siblings().fadeOut(0);
  });
});
$('#footer a').click(function() {                   
    $('#content > *').stop().fadeOut('fast');
    $('#contact').delay(1000).fadeIn('slow');
    return false;
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
  $('.btn_js').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
      var id = $(this).attr('href');
      $(id).fadeIn(0).siblings().fadeOut(0);
  });
});
$(document).ready(function() {
  $('.sign_up').click(function(event) {
      event.preventDefault();
      $('.overlay_registration').toggleClass('show').siblings().removeClass('show');
       $('html').toggleClass('hidden').siblings().removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.overlay_registration').removeClass('show');
      $('html').removeClass('hidden');

  });
});
$(document).ready(function() {
  $('.reg_mail').click(function(event) {
      event.preventDefault();
      $('.overlay_on_mail').toggleClass('show').siblings().removeClass('show');
      $('html').toggleClass('hidden').siblings().removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.reg_mail').click(function(event) {
      event.preventDefault();
      $('html').toggleClass('hidden').siblings().removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.overlay_on_mail').removeClass('show');
      $('html').removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.sign_in').click(function(event) {
      event.preventDefault();
      $('.overlay_sign_in').toggleClass('show').siblings().removeClass('show');
      $('html').toggleClass('hidden').siblings().removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.overlay_sign_in').removeClass('show');
      $('html').removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.forget').click(function(event) {
      event.preventDefault();
      $('.overlay_password_mail').toggleClass('show').siblings().removeClass('show');
      $('html').toggleClass('hidden').siblings().removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.forget').click(function(event) {
      event.preventDefault();
      $('html').toggleClass('hidden').siblings().removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.overlay_password_mail').removeClass('show');
      $('html').removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.send_href').click(function(event) {
      event.preventDefault();
      $('.overlay_mail_send').toggleClass('show').siblings().removeClass('show');
      $('html').toggleClass('hidden').siblings().removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.send_href').click(function(event) {
      event.preventDefault();
      $('html').toggleClass('hidden').siblings().removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.overlay_mail_send').removeClass('show');
      $('html').removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.change_info_edit').click(function(event) {
      event.preventDefault();
      $('.overlay_new_password').toggleClass('show').siblings().removeClass('show');
      $('html').toggleClass('hidden').siblings().removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.overlay_new_password').removeClass('show');
      $('html').removeClass('hidden');
  });
});



$(document).ready(function() {
  $('.add').click(function(event) {
      event.preventDefault();
      $('.overlay_new_rate').toggleClass('show').siblings().removeClass('show')
     $('html').toggleClass('hidden').siblings().removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.overlay_new_rate').removeClass('show');
      $('html').removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.new_rate_js').click(function(event) {
      event.preventDefault();
      $('.overlay_active_rate').toggleClass('show').siblings().removeClass('show');
      $('html').toggleClass('hidden').siblings().removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.overlay_active_rate').removeClass('show');
       $('html').removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.new_rate_js2').click(function(event) {
      event.preventDefault();
     $('html').toggleClass('hidden').siblings().removeClass('hidden');
      $('.overlay_active_close_rate').toggleClass('show').siblings().removeClass('show');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.overlay_active_close_rate').removeClass('show');
       $('html').removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.new_rate_js3').click(function(event) {
      event.preventDefault();
      $('.overlay_active_my_rate').toggleClass('show').siblings().removeClass('show');
      $('html').toggleClass('hidden').siblings().removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.overlay_active_my_rate').removeClass('show');
       $('html').removeClass('hidden');
  });
});
function Selected(a) {
 var label = a.value;
 if (label==1) {
  document.getElementById("Label1").style.display='block';
  document.getElementById("Label2").style.display='none';
  document.getElementById("Label3").style.display='none';
  } else if (label==2) {
  document.getElementById("Label1").style.display='none';
  document.getElementById("Label2").style.display='block';
  document.getElementById("Label3").style.display='none';
  } else if (label==3) {
  document.getElementById("Label1").style.display='none';
  document.getElementById("Label2").style.display='none';
  document.getElementById("Label3").style.display='block';
  }
  }
  function Selecteded(b) {
 var label = b.value;
 if (label==1) {
  document.getElementById("first").style.display='block';
  document.getElementById("cyber-sport").style.display='none';
  } else if (label==2) {
  document.getElementById("first").style.display='none';
  document.getElementById("cyber-sport").style.display='block';
  }
  }
$(function(){
 $('#form').validate({
   rules: {
      winner: {
        required: true
      },
      sum: {
        required: true,
        min: 50,
        max: 1000
      },
      source: {
        required: true,
      },
    },
   messages: {
      sum: {
        required:"Минимальная сумма ставки 50 грн.",
        min: "Минимальная сумма ставки 50 грн.",
        max: "Для создания ставки у вас недостаточно средств на балансе."
      },
      winner: {
        required:"Все поля обязательны для заполнения"
      },
      source: {
        required:"Все поля обязательны для заполнения"
      },
 }
 });
}); 
$(".social_share_copy").click(function(e) {
  $('.copy_link_footer').toggle();
  e.stopPropagation();
});
$('.copy_link_footer').click(function(e) {
  e.stopPropagation();
});
$(document).click(function() {
  $('.copy_link_footer').hide();
});