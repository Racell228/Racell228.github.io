var start = $('.hero').outerHeight();
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height > start + 116){
    $('.package_nav').addClass('fixed');
    } else{
      $('.package_nav').removeClass('fixed');
    }
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    var container = $('.package_overlay').outerHeight();
    if(height > (container + start)){
      $('.package_nav').addClass('absolute');
    } else{
      $('.package_nav').removeClass('absolute');
    }
});


var $title = $('.package_nav_title');
var $navAdvanced = $('.package_nav_item_advanced');
var $navDelivery = $('.package_nav_item_delivery');
var $navPlatform = $('.package_nav_item_platform');
$(document).on('scroll', function () {
    var position = $(window).scrollTop(),
        block_position = $('#advanced').offset().top; // расположение блока, от которого и зависит фиксированность хэдера
        if (position > block_position) { // если позиция скролла страницы больше, то ставим фикс
            $title.addClass('advanced');
            $title.html('A');
            $navAdvanced.addClass('advanced');


            $navDelivery.removeClass('delivery');
            $navPlatform.removeClass('platform');
        } 
});
$(document).on('scroll', function () {
    var position = $(window).scrollTop(),
        block_position = $('#delivery').offset().top; // расположение блока, от которого и зависит фиксированность хэдера
        if (position > block_position - 100) { // если позиция скролла страницы больше, то ставим фикс
            $title.addClass('delivery');
            $title.html('D');
            $navDelivery.addClass('delivery');

            $navAdvanced.removeClass('advanced');
            $navPlatform.removeClass('platform');
        } else {
            $title.removeClass('delivery');
        }
});

$(document).on('scroll', function () {
    var position = $(window).scrollTop(),
        block_position = $('#platform').offset().top; // расположение блока, от которого и зависит фиксированность хэдера
        if (position > block_position - 100) { // если позиция скролла страницы больше, то ставим фикс
            $title.addClass('platform');
            $title.html('P');
            $navPlatform.addClass('platform');

            $navAdvanced.removeClass('advanced');
            $navDelivery.removeClass('delivery');
        } else {
            $title.removeClass('platform');
        }
});





$(document).ready(function() {
  $('.hero_scroll,.package_nav_item').click(function(){
    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(el).offset().top}, 1000);
    return false;
  });
});
