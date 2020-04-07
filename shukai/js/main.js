// function addZero(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }

// function getCurrentTime1(){
//     var time1, h1, m1;
//     time1 = new Date(Date.now());
//     h1 = time1.getUTCHours();
//     m1 = addZero(time1.getUTCMinutes());
//     return (h1 + 9) + '<span class=timeseparator>:</span>' + m1;
// }
// function setTimer1(){
//     time1.innerHTML = getCurrentTime1();
// }
// setInterval(setTimer1, 1000);




// function getCurrentTime2(){
//     var time2, h2, m2;
//     time2 = new Date(Date.now());
//     h2 = time2.getUTCHours();
//     m2 = addZero(time2.getUTCMinutes());
//     return (h2 + 8) + '<span class=timeseparator>:</span>' + m2;
// }
// function setTimer2(){
//     time2.innerHTML = getCurrentTime2();
// }
// setInterval(setTimer2, 1000);



// function getCurrentTime3(){
//     var time3, h3, m3;
//     time3 = new Date(Date.now());
//     h3 = time3.getUTCHours();
//     m3 = addZero(time3.getUTCMinutes());
//     return (h3 + 5) + '<span class=timeseparator>:</span>' + m3;
// }
// function setTimer3(){
//     time3.innerHTML = getCurrentTime3();
// }
// setInterval(setTimer3, 1000);



// function getCurrentTime4(){
//     var time4, h4, m4;
//     time4 = new Date(Date.now());
//     h4 = time4.getUTCHours();
//     m4 = addZero(time4.getUTCMinutes());
//     return (h4 + 3) + '<span class=timeseparator>:</span>' + m4;
// }
// function setTimer4(){
//     time4.innerHTML = getCurrentTime4();
// }
// setInterval(setTimer4, 1000);

// function getCurrentTime5(){
//     var time5, h5, m5;
//     time5 = new Date(Date.now());
//     h5 = time5.getUTCHours();
//     m5 = addZero(time5.getUTCMinutes());
//     return (h5 + 2) + '<span class=timeseparator>:</span>' + m5;
// }
// function setTimer5(){
//     time5.innerHTML = getCurrentTime5();
// }
// setInterval(setTimer5, 1000);


// function getCurrentTime6(){
//     var time6, h6, m6;
//     time6 = new Date(Date.now());
//     h6 = time6.getUTCHours();
//     m6 = addZero(time6.getUTCMinutes());
//     return (h6 + 1) + '<span class=timeseparator>:</span>' + m6;
// }
// function setTimer6(){
//     time6.innerHTML = getCurrentTime6();
// }
// setInterval(setTimer6, 1000);



// function getCurrentTime7(){
//     var time7, h7, m7;
//     time7 = new Date(Date.now());
//     h7 = time7.getUTCHours();
//     m7 = addZero(time7.getUTCMinutes());
//     return (h7 - 4) + '<span class=timeseparator>:</span>' + m7;
// }
// function setTimer7(){
//     time7.innerHTML = getCurrentTime7();
// }
// setInterval(setTimer7, 1000);



$(document).ready(function() {
  $('.search_controls_text').click(function(event) {
      event.preventDefault();
      $('.search_result_text').show();
      $('.search_result_image').hide();
      $('.search_controls_image').removeClass('controls_active'); 
      $(this).addClass('controls_active'); 
  });
});
$(document).ready(function() {
  $('.search_controls_image').click(function(event) {
      event.preventDefault();
      $('.search_result_image').show();
      $('.search_result_text').hide();
      $('.search_controls_text').removeClass('controls_active'); 
      $(this).addClass('controls_active');
  });
});