// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() { 
	
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
	$('.js-button-campaign').addClass('close');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	$('.js-button-campaign').removeClass('close');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		$('.js-button-campaign').removeClass('close');
	}
});
