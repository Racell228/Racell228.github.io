const employees = document.querySelector("#employees")
noUiSlider.create(employees, {
  start: 1500,
  connect: [true, false],

  tooltips: {
    to: function(value) {
        return Math.trunc(value) + "RON"
    }
  },
  range: {
    'min': 1500,
    '50%': 15000,
    'max': 25000
  },
  
  pips: {
    mode: 'steps',
    filter: function (value, type) {
      return type === 0 ? -1 : 1;
    },
    format: {
      to: function (value) {
        return value + "RON";
      }
    }
  }
});
var calc_result = document.getElementById('calc_result');
 employees.noUiSlider.on('update', function (values, handle) {
     calc_result.innerHTML = Math.trunc(values[handle] * 3.5) + "RON";
     
 });


 
$(document).ready(function() {
  $('.burger').click(function(event) {
      $(this).toggleClass('active');
      $('.header_nav').toggleClass('active');
      
  });
});
//select open
$(document).ready(function() {
  const btnOk = document.querySelector('.hero_video_play');
  const wrapperVideo = document.getElementById('video');

btnOk.addEventListener('click',function(){
  wrapperVideo.play();
  $(this).hide();
});


});



//Плавный скрол по секциям
$(document).ready(function() {
  $('.header_nav_item,.footer_nav_item').click(function(){
    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(el).offset().top}, 1000);
    return false;
  });
});




$(document).ready(function() {
  //1
  time1 = Date.now();
  time1_minus = time1 - 135794;
  time1_minus_time = new Date(time1_minus);
  result1 = time1_minus_time.toLocaleTimeString();
  $('#item1').html(result1);

  //2
  time2_minus = time1_minus - 1134267;
  time2_minus_time = new Date(time2_minus);
  result2 = time2_minus_time.toLocaleTimeString();
  $('#item2').html(result2);

  //3
  time3_minus = time2_minus - 2131943;
  time3_minus_time = new Date(time3_minus);
  result3 = time3_minus_time.toLocaleTimeString();
  $('#item3').html(result3);

  //4
  time4_minus = time3_minus - 161749;
  time4_minus_time = new Date(time4_minus);
  result4 = time4_minus_time.toLocaleTimeString();
  $('#item4').html(result4);

  //5
  time5_minus = time4_minus - 5135691;
  time5_minus_time = new Date(time5_minus);
  result5 = time5_minus_time.toLocaleTimeString();
  $('#item5').html(result5);

  //6
  time6_minus = time5_minus - 4131534;
  time6_minus_time = new Date(time6_minus);
  result6 = time6_minus_time.toLocaleTimeString();
  $('#item6').html(result6);

  //7
  time7_minus = time6_minus - 4131850;
  time7_minus_time = new Date(time7_minus);
  result7 = time7_minus_time.toLocaleTimeString();
  $('#item7').html(result7);

  //8
  time8_minus = time7_minus - 5132795;
  time8_minus_time = new Date(time8_minus);
  result8 = time8_minus_time.toLocaleTimeString();
  $('#item8').html(result8);

  //9
  time9_minus = time8_minus - 137659;
  time9_minus_time = new Date(time9_minus);
  result9 = time9_minus_time.toLocaleTimeString();
  $('#item9').html(result9);  
});




