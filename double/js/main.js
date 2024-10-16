$(document).ready(function() {
  $('select').styler();
});
//Портфолио слайдер
$(document).ready(function(){
  $('.portfolio_slider').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    dots: true,
    margin: 12,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
  });
});

//Переключение навыков(О нас)
$(document).ready(function() {
  $('.about_person_nav_link').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(300).siblings(0).fadeOut(0);
  });
});



//Вызов Ползунка Цены
$(document).ready(function() {
    var nonLinearSlider = document.getElementById('slider-non-linear');
    noUiSlider.create(nonLinearSlider, {
        start: [1],
        step: 1,
        range: {
            'min': [1],
            'max': [20]
        },
        format: wNumb({
        decimals: 0,
        thousand: '.',
        suffix: ' '
    })
    });
    var nonLinearSliderValueElement = document.getElementById('slider-non-linear-value');
    nonLinearSlider.noUiSlider.on('update', function (values, handle) {
    //Получаем value выбранного селекта Тип Сайта
    var select_site = document.getElementById('site');
    var options_site = select_site.options;
    var selected_site = select_site.options[select_site.selectedIndex];
    var site_value = selected_site.getAttribute('value');
    var site_value_num = Number(site_value);

    //Получаем value выбранного селекта Услуга
    var select_service = document.getElementById('service');
    var options_service = select_service.options;
    var selected_service = select_service.options[select_service.selectedIndex];
    var service_value = selected_service.getAttribute('value');
    var service_value_num = Number(service_value);

    //Обьявляем переменную ползунок
    var pages = document.getElementById('slider-non-linear-value');
    var values_num =  Number(values[handle]);

    var coef = 50;//Цена за страницу
    var price = (site_value_num * service_value_num) + (coef * values_num ); //Вычесления

    var price_text = $('.prices_table_price');
    price_text.html(price);
    nonLinearSliderValueElement.innerHTML = values[handle];
    }); 
});







//Слайдер отзывы
$(document).ready(function(){
  $('.reviews_slider').slick({
    slidesToShow:2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    dots: true,
    margin: 12,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });
});

//Вопрос-Ответ
$(document).ready(function() {
  $('.question_item').click(function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $(this).find('.question_item_answer').toggle(400);
  });
});
$(document).ready(function() {
  $('.question_nav_link').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(300).siblings(0).fadeOut(0);
  });
});



//Добавление Класа аctive при скроле
document.addEventListener('DOMContentLoaded', function() {

  const navInit = () => {
    const nav = document.querySelector('.header_nav') // ищем блок навигации
    const links = document.querySelectorAll('.header_nav_link') // ищем все навигационные ссылки
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
  $('.header_nav_link,.logo_overlay').click(function(){
    $('header').removeClass('active');
    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(el).offset().top - $("header").height()}, 1000);
    return false;
  });
});


//Бегущие Цифры 
$(document).ready(function() {
  var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 500) {
      if (cc < 2) {
        $(".about_number_item_quanity span").addClass("viz");
        $('.about_number_item_quanity span').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 500 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});
});

//Бургер
$(document).ready(function() {
  $('.mobile_burger').click(function(event) {
    event.preventDefault();
      $('header').addClass('active');
  });
});
//Бургер Закрытие
$(document).ready(function() {
  $('.close').click(function(event) {
    event.preventDefault();
      $('header').removeClass('active');
  });
});

$(document).ready(function() {
  $('.modal_form-js').click(function(event) {
    event.preventDefault();
      $('.modal_form').show(400);
  });
});
$(document).ready(function() {
  $('.modal_close').click(function(event) {
    event.preventDefault();
      $('.modal').hide(400);
  });
}); 


$(document).ready(function() {
  $('#miId').click(function(event) {
    event.preventDefault();
    var el = document.getElementById('miId');
      var id = el.getAttribute('href');
      location = id;
  });
}); 

