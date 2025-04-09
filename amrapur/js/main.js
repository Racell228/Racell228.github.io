//Show Mobile Menu
$(document).ready(function() {
    $('.burger').click(function(){
        event.preventDefault();
        $(this).toggleClass('active');
        $('.modal_menu').toggleClass('active');
        $('html,body').toggleClass('hidden');
    });
});
//Animation
$(window).scroll(function() {
    $('.animate').each(function(){
        var Pos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var height = $(window).height();
        if (Pos < topOfWindow + height - 150) {
            $(this).addClass("show");
        }
        else {
            $(this).removeClass("show");
        }
    });
});
$(".product_nav").each(function () {
    var slider = $(this);
    slider.slick({
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 3,
        arrows: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="left"></button>',
        nextArrow: '<button type="button" class="right"></button>',
        appendArrows: $(this).parent('.product_nav_overlay'),
        rows: 0,
    });
});
$(".product_slider").each(function () {
    var slider = $(this);
    slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        centerMode: true,
        prevArrow: '<button type="button" class="left"></button>',
        nextArrow: '<button type="button" class="right"></button>',
        appendArrows: $(this).parent('.product').find('.product_slider_nav'),
        rows: 0,
    });
});

if (window.matchMedia("(max-width: 768px)").matches) {
    //Initial Category Slider
    $(".category_wrapper").each(function () {
        var slider = $(this);
        slider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button type="button" class="left"></button>',
            nextArrow: '<button type="button" class="right"></button>',
            appendArrows: $(this).parent('.category_overlay').find('.category_nav'),
            rows: 0,
        });
    });
    //Open Child links In mobile menu
    $('.header_mega_item_title').click(function(){
        event.preventDefault();
        $(this).parent().find('.header_mega_item_hide').toggle(400);
    });

    $('.contacts_offices_item').click(function(){
        $(this).toggleClass('active');
    });
} else {
    //Animation Categories on hover
    $('.category_item').each(function() {
        $(this).mouseover(function() {
            $(this).addClass('active');
            $(this).parent('.category_wrapper').children('.category_item').not('.active').addClass('inactive');
        });
        $(this).mouseleave(function() {
            $(this).removeClass('active');
            $(this).parent('.category_wrapper').children('.category_item').not('.active').removeClass('inactive');
        });
    });
}


