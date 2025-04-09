$(document).ready(function() {
  	let today = new Date();
	let year = today.getFullYear();
	document.getElementById("year").innerHTML = year;
});


$(document).ready(function() {
  $('.burger').click(function(event) {
    event.preventDefault();
      $('.header_nav').toggleClass('active');
      $(this).toggleClass('active');
      $('body,html').toggleClass('hidden');
  });
});


$(document).ready(function() {
  $('.modal_cf_close').click(function(event) {
    event.preventDefault();
      $('.modal_cf').hide(400);
  });
});