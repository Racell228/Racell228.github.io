$(document).ready(function() {
  //Burger
  $('.header_burger').click(function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $('header').toggleClass('active');
      $('html,body').toggleClass('hidden');
  });
  //Show Consultation Modal
  $('.consultation_btn').click(function(event) {
    event.preventDefault();
      $('.modal_consultation').show(400);
      $('html,body').addClass('hidden');
  });
  //Close Modal
  $('.modal_close').click(function(event) {
    event.preventDefault();
      $('.modal').hide(400);
      $('html,body').removeClass('hidden');
  });
  //Scroll To Element
  $('.scroll_btn').click(function(){
    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(el).offset().top}, 1000);
    return false;
  });
});