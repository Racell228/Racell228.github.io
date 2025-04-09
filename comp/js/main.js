$(document).ready(function() {
  let today = new Date();
  let year = today.getFullYear();
  document.getElementById("year").innerHTML = year;
});


$(document).ready(function() {
  //Burger
  $('.burger').click(function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $('.header_nav').toggleClass('active');
      $('html,body').toggleClass('hidden');
  });
});