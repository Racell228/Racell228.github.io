$(document).ready(function() {
	let today = new Date();
	let year = today.getFullYear();
	document.getElementById("year").innerHTML = year;
});
$(document).ready(function() {
  $('.burger').click(function(event) {
      $('.header_nav').toggleClass("active");
      $(this).toggleClass('active');
      $('body,html').toggleClass("hidden");
  });
});

$(document).ready(function() {
  $('.modal_cf_close').click(function(event) {
      $('.modal_cf').hide();
      $('body,html').removeClass("hidden");
  });
});

$(document).ready(function() {
  $('.modal_close').click(function(event) {
      $('.modal').hide();
      $('body,html').removeClass("hidden");
  });
});

$(document).ready(function() {
  $('.modal-js').click(function(event) {
      $('.modal').show();
      $('body,html').addClass("hidden");
  });
});