$(window).scroll(function() { 
    var the_top = $(document).scrollTop();
    if (the_top > 50) {
        $('header').addClass('header_fixed');
    }
    else {
        $('header').removeClass('header_fixed');
    }
});


$(document).ready(function() {
  $('.burger').click(function(event) {
      event.preventDefault();
        $('.header_nav').toggleClass('show');
        $(this).toggleClass('active');
        $('html,body').toggleClass('hidden');
  });
});



$(document).ready(function() {
  $('.header_nav_item_title').click(function(event) {
      event.preventDefault();
        $(this).parent().find('.header_nav_item_child').toggleClass('show');
  });
});

$(document).ready(function() {
  $('.header_nav_item_child_row_title').click(function(event) {
      event.preventDefault();
        $(this).parent().find('.header_nav_item_child_row_overlay').toggle(400);
        $(this).toggleClass('active');
  });
});
$(document).ready(function() {
  $('.header_nav_item_title_mobile').click(function(event) {
      event.preventDefault();
        $(this).parent().removeClass('show');
  });
});

