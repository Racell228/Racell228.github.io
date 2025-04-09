let map_loaded = false; //false - карта не загружена, true - карта загружена
let $select_current = null; //текущий select

$(function() {
	'use strict';
	
	
	/* Открыть выпадающий список
	------------------------------------------------------- */
	$('.js-select').on('click', function(){
		let $select = $(this);
		$select_current = $select; //текущий select
		$('.js-select').removeClass('open');
		$select.addClass('open');
		return false;
	});
	
	
	/* Закрыть выпадающий список при клике за пределами его области
	------------------------------------------------------- */
	$(function(){
		$(document).on('click touchstart', function(event) {
			if ($('.js-select').is('.open')) {
				if ($(event.target).closest('.js-select').length) { return; }
				$('.js-select').removeClass('open');
				event.stopPropagation();
			}
		});
	});
	
	
	/* Закрыть выпадающий список при клике на стрелку
	------------------------------------------------------- */
	$('.select-selected').on('click', function(){
		let $select = $(this).parents('.js-select');
		
		if ($select.hasClass('open')) {
			$select.removeClass('open');
			return false;
		}
	});
	
	
	/* Выбрать элемент списка
	------------------------------------------------------- */
	$('.js-option').on('click', function(){
		$select_current.find('.js-selected').text($(this).text());
		$('.js-select').removeClass('open');
		return false;
	});
	
	
	/* checkbox
	------------------------------------------------------- */
	$('.js-checkbox').on('click', function(){
		let $this = $(this);
		
		if ($this.hasClass('checked')) {
			$this.removeClass('checked');
		} else {
			$this.addClass('checked');
		}
		
		return false;
	});
	
	
	/* Меню на мобильных устройствах
	------------------------------------------------------- */
	$('#js-menu-open').click(function () {
		$('#js-menu').addClass('open');
		$('#page').addClass('form-open');
		return false;
	});
	
	
	$('#js-menu-close').click(function () {
		$('#js-menu').removeClass('open');
		$('#page').removeClass('form-open');
		return false;
	});
	
	
	$(function(){
		$(document).on('click touchstart', function(event) {
			if ($('#js-menu').hasClass('open')) {
				if ($(event.target).closest('#js-menu').length) { return; }
				$('#js-menu').removeClass('open');
				$('#page').removeClass('form-open');
				event.stopPropagation();
			}
		});
	});
	
	
	/* Наверх страницы
	------------------------------------------------------- */
	$('#js-up').on('click', function(){
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
	
	
	/* Показать все фото
	------------------------------------------------------- */
	$('#js-all-photo').on('click', function(){
		let $btn = $(this);
		
		if ($btn.hasClass('open')) {
			$btn.removeClass('open');
			$('.js-photo').addClass('hidden');
		} else {
			$btn.addClass('open');
			$('.js-photo').removeClass('hidden');
		}
		
		return false;
	});
	
	
	/* Показать плеер
	------------------------------------------------------- */
	$('.js-video').on('click',function(e){

		e.preventDefault();
		
		//получить URL видео
		let $url = $(this).data('id');
			
		//получить идентификатор видео
		let $id = $url.substring($url.search('=') + 1, $url.length);

		//построить плеер
		$('#mPlayer div').html('<iframe  src="https://www.youtube.com/embed/' + $id + '" frameborder="0" allowfullscreen></iframe>');

		//показать плеер
		$('#mPlayer').fadeIn(500);
	});
	
	
	/* Скрыть плеер
	------------------------------------------------------- */
	$('#mPlayer').on('click',function(){
		$('#mPlayer').fadeOut(500);
		$('#mPlayer div').empty();
	});
	
	
	/* Размер плеера
	------------------------------------------------------- */
	let $win_width = $(window).outerWidth(); //ширина окна
	playerSize();
	$(window).resize(playerSize);
	
	function playerSize() {
		let $player = $('#mPlayer div');
		let $height = $player.outerHeight();
		let $width = $height * (16 / 9);
		
		if ($win_width < $height) {
			$width = $win_width - 40;
			$height = $width / (16 / 9);
			$player.outerHeight($height);
		}
		
		$player.outerWidth($width);
	}
	
	
	/* Карта
	------------------------------------------------------- */
	if ($('#js-map').length) {
		let map_container = document.getElementById('js-map');
		let options_map = {
			once: true,
			passive: true,
			capture: true
		};

		map_container.addEventListener('click', start_lazy_map, options_map);
		map_container.addEventListener('mouseover', start_lazy_map, options_map);
		map_container.addEventListener('touchstart', start_lazy_map, options_map);
		map_container.addEventListener('touchmove', start_lazy_map, options_map);
	}
	
	
});


/* Карта
------------------------------------------------------- */
function start_lazy_map() {
	if (!map_loaded) {
		let map_block = document.getElementById('js-map-lazy');
		map_loaded = true;
		map_block.setAttribute('src', map_block.getAttribute('data-src'));
		map_block.removeAttribute('data-src');
	}
}


function mapInit() {
    let mapOptions = {
        zoom: 14,
        zoomControl: false,
        scrollwheel: false,
        scaleControl: false,
        rotateControl: false,
        panControl: false,
        mapMaker: false,
        disableDefaultUI: false,
        streetViewControl: false,
        signInControl: false,
        mapTypeControl: false,
        center: new google.maps.LatLng(40.6976637,-74.119764),
		styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    };

    let mapElement = document.getElementById('js-map');
    let map = new google.maps.Map(mapElement, mapOptions);
	
	new google.maps.Marker({
		position: new google.maps.LatLng(40.6976637,-74.119764),
		map: map,
		title: '35 W 46nd Street New York',
		icon: '/img/map-pin.png'
	});
	

    // Enable scroll zoom after click on map
    map.addListener('click', function() {
       map.setOptions({
           scrollwheel: true
       });
    });


    // Enable scroll zoom after drag on map
    map.addListener('drag', function() {
       map.setOptions({
           scrollwheel: true
       });
    });


    // Disable scroll zoom when mouse leave map
    map.addListener('mouseout', function() {
       map.setOptions({
           scrollwheel: false
       });
    });
}