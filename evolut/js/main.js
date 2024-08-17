

$(document).ready(function() {
  $('.services_overlay').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      appendDots:$('.services_nav'),
      arrows:true,
      variableWidth:true,
      rows: 0,
      prevArrow: '<button type="button" class="left"></button>',
      nextArrow: '<button type="button" class="right"></button>',
      appendArrows:$('.services_nav'),
  });
});


//Добавление Класа аctive при скроле
document.addEventListener('DOMContentLoaded', function() {

  const navInit = () => {
    const nav = document.querySelector('.side_nav') // ищем блок навигации
    const links = document.querySelectorAll('.side_nav_item') // ищем все навигационные ссылки
    const sections = document.querySelectorAll('section') // ищем все секции
    sections.forEach(section => { // для каждой секции
      if (window.pageYOffset >= section.offsetTop - 150) { // проверяем, если страница прокручена больше, чем расстояние секции от начала страницы
        links.forEach(link => { // для каждой ссылки
          link.classList.remove('active') // удаляем активный класс
          if (link.dataset.section === section.dataset.section) { // проверяем, если data-атрибуты ссылки и секции совпадают
            link.classList.add('active') // добавляем ссылке активный класс
          }

        })
      }

    })
  }
  navInit() // запускаем функцию при загрузке страницы
  window.addEventListener('scroll', () => {
    navInit() // запускаем функцию при скролле страницы
  })
  window.addEventListener('resize', () => {
    navInit() // запускаем функцию при ресайзе страницы
  })

})



//Плавный скрол по секциям
$(document).ready(function() {
  $('.side_nav_item,.header_nav_item,.hero_btn,.header_nav_btn').click(function(){
    var el = $(this).attr('href');
    $('.header_nav').removeClass('active');
    $('.burger').removeClass('active');
    $('html,body').animate({
      scrollTop: $(el).offset().top}, 1000);
    return false;
  });
});


$(document).ready(function() {
  $('.header_lang_current').click(function(){
    event.preventDefault();
    $('.header_lang_hide').toggle();
  });
});

$(document).ready(function() {
  $('.header_actions_modal').click(function(){
    event.preventDefault();
    $('.modal_form').show();
  });
});




$(document).ready(function() {
  $('.burger').click(function(){
    event.preventDefault();
    $(this).toggleClass('active');
    $('.header_nav').toggleClass('active');
  });
});


// Img в Svg
$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});



$(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 50) {
        $('header').addClass('header_fixed');
    }
    else {
        $('header').removeClass('header_fixed');
    }
});


//Вывод результата при отправке формы 
document.addEventListener( 'wpcf7mailsent', function( event ) {
  $('.modal_done').show();
  $('.modal_form').hide();
}, false );
document.addEventListener( 'wpcf7invalid', function( event ) {
  $('.modal_error').show();
  $('.modal_form').hide();
}, false );


$(document).ready(function() {
  $('.modal_close').click(function(){
    event.preventDefault();
    $('.modal').hide();
  });
});