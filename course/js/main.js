$(document).ready(function() {
  $('.faq_item').click(function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $(this).find('.faq_item_content').toggle(400);
  });
});

//Добавление Класа аctive при скроле
document.addEventListener('DOMContentLoaded', function() {

  const navInit = () => {
    const nav = document.querySelector('.header_nav') // ищем блок навигации
    const links = document.querySelectorAll('.header_nav a') // ищем все навигационные ссылки
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
  $('.header_nav a').click(function(){
    var el = $(this).attr('href');
    $('.header_nav').removeClass('active');
    $('.burger').removeClass('active');
    $('html,body').animate({
      scrollTop: $(el).offset().top - $("header").height()}, 1000);
    return false;
  });
});


$(document).ready(function() {
  $('.burger').click(function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $('.header_nav').toggleClass('active');
  });
});