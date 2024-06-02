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
  $('.side_nav_item,.header_nav_item,.hero_btn').click(function(){
    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(el).offset().top}, 1000);
    return false;
  });
});


$(document).ready(function() {
  $('.header_lang_current').click(function(){
    $('.header_lang_hide').show(400);
  });
});