$(document).ready(function() {
  $('.header__items_right-menu').click(function(event) {
      event.preventDefault();
      $('.burger_menu').toggle(400);
      $('.header__items_right-menu-show').toggle();
      $('.header__items_right-menu-close').toggle();
	  $('body,html').toggleClass('overflow');
  });
});
// $(document).ready(function() {
//   $(".category_item-headline").click(function () {
//     elementClick = $(this).attr("href")
//     destination = $(elementClick).offset().top;
//     $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
//     return false;
//   });
// });
$(document).ready(function() {
  $('.filter_link').click(function(event) {
      event.preventDefault();
      $('.filter_variants-overlay').toggle(400);
      $(this).find('.category_arrow-down').toggleClass('arrow_rotate');
  });
}); 

$(document).ready(function() {
  $('.service_link').click(function(event) {
      event.preventDefault();
      $('.filter_services-overlay').toggle(400);
      $(this).find('.category_arrow-down').toggleClass('arrow_rotate');
  });
});  







$(document).ready(function() {
  $(".down-arrow").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});



if(window.matchMedia('(max-width: 768px)').matches){
  $(document).ready(function() {
  $('.project_details-credits').click(function(event) {
      event.preventDefault();
      $(this).find('ul').toggle(400);
      $(this).find('.project_items-title').toggleClass('project_items-title-active');
  });
});  

$(document).ready(function() {
  $('.project_details-awards').click(function(event) {
      event.preventDefault();
      $(this).find('ul').toggle(400);
      $(this).find('.title_768').toggleClass('project_items-title-active');
  });
});  
}