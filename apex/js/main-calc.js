    // Calculator delivery
    $('.stock').slideUp(300);

    $(".select_l").click(function() {
        var p=$(this).html();

        // $('.leter_back').css({"opacity":"1"});
        $('.leter_back').css({"display":"flex"});

        $('.leters_overlay').css({"flex-direction":"column",  "align-items": "flex-start"});

        $('.calc_choise_ia,.calc_choise_copart,.aucTitle').css({"display":"none"});

        $(this).addClass("selected_letter");

        $(".select_l:not(.selected_letter)").each(function() {
            $(this).addClass("hide_letter");
        });

        $('span[data-letter!='+p+']').each(function() {
            $(this).removeClass("show_loc");
        });

        $('span[data-letter='+p+']').each(function() {
            $(this).addClass("show_loc");
        });

        $('.stock').slideDown(300);

        $(".stateTitle").css("display","none");

        $(".pageCounter").text("03");
    });

    $("#ia_auc").click(function() {
        // $('.leter_back').css({"opacity":"0"});
        $('.leter_back').css({"display":"none"});

        // $('.show_letter').fadeOut(300);
        $('.show_letter').slideDown(300);

        $("#cop_auc,#ia_auc").css("border-color","#F3F5F8");

        $(this).css("border-color","#5F85DB");
        // $('.show_location').fadeIn(300);
        $('.show_location').slideUp(300);


        $(".select_l").each(function() {
            $(this).removeClass("hide_letter selected_letter");
        });

        $(".full_name").each(function() {
            $(this).removeClass("show_loc");
        });

        $(".total_price").css("display","none");

        
        $(".stateTitle").css("display","block");

        $(".pageCounter").text("02");

        $('.stock').slideUp(300);

        window.scrollTo({ top: 400, behavior: "smooth"});
    });

    $("#cop_auc").click(function() {
        // $('.leter_back').css({"opacity":"0"});
        $('.leter_back').css({"display":"none"});

        // $('.show_location').fadeOut(300);
        $('.show_location').slideDown(300);

        $("#cop_auc,#ia_auc").css("border-color","#F3F5F8");

        $(this).css("border-color","#5F85DB");

        // $('.show_letter').fadeIn(300);
        $('.show_letter').slideUp(300);

        $(".select_l").each(function() {
            $(this).removeClass("hide_letter selected_letter");
        });

        $(".full_name").each(function() {
            $(this).removeClass("show_loc");
        });

        $(".total_price").css("display","none");

        $(".stateTitle").css("display","block");

        $(".pageCounter").text("02");

        $('.stock').slideUp(300); 

        window.scrollTo({ top: 400, behavior: "smooth"});
    });

    $(".leter_back").click(function() {
        // $('.leter_back').css({"opacity":"0"});
        $('.leter_back').css({"display":"none"});

        $(".select_l").each(function() {
            $(this).removeClass("hide_letter selected_letter");
        });

        $(".full_name").each(function() {
            $(this).removeClass("show_loc");
        });

        $(".total_price").css("display","none");

        $(".stateTitle").css("display","block");

        $(".pageCounter").text("02");

        $('.stock').slideUp(300);

        $(".aucTitle").css("display","block");
        
        $(".calc_choise_ia,.calc_choise_copart").css("display","block");

        $(".leters_overlay").css({"flex-direction":"row","align-items":"center"});
        
    });

    $(".full_name").click(function() {
        $( ".full_name" ).each(function() {
            // $(this).css("font-weight": "400");
            $(this).removeClass('selected_name');
        });

        $(this).addClass('selected_name');
        // $(this).css("font-weight": "700");

        $("#ground").html($(this).data('price'));

        switch ($(this).data('port')) {
            case "NJ":
                $("#port").html(630);
                $("#sub_t").html("Фрахт - NJ");
                break;
            case "GA":
                $("#port").html(635);
                $("#sub_t").html("Фрахт - GA");
                break;
            case "TX":
                $("#port").html(725);
                $("#sub_t").html("Фрахт - TX");
                break;
            case "CA":
                $("#port").html(850);
                $("#sub_t").html("Фрахт - CA");
                break;
            default:
        }

        $("#service").html(100);

    	$(".total_price").slideDown(300);

        $("#total").html(Number($("#ground").text())+Number($("#port").text())+Number($("#service").text()));
    });
    // END Calculator delivery

    // Calculator customs
    if($('#calcCost').length) {
        $('#calcCost').mask('# ##0', {reverse: true});
    }
    if($('#calcYear').length) {
        $('#calcYear').mask('0000');
    }
    if($('#calcVolume').length) {
        $('#calcVolume').mask('0.0');
    }
    if($('#calcCapacity').length) {
        $('#calcCapacity').mask('0000');
    }

    $('input[name="year-manufacture"]').on('click', function() {
        $('#calcYear').val($(this).val());
    });

    $('#calcYear').on('keyup', function() {
        var $thisValue = $(this).val();

        $('input[name="year-manufacture"]').each(function() {
            var $eachValue = $(this).val();

            if($thisValue === $eachValue) {
                $(this).prop('checked', true);
            } else {
                $(this).prop('checked', false);
            }
        });
    });

    $('input[name="engine-volume"]').on('click', function() {
        $('#calcVolume').val($(this).val());
    });
    
    $('#calcVolume').on('keyup', function() {
        var $thisValue = parseFloat($(this).val());

        $('input[name="engine-volume"]').each(function() {
            var $eachValue = parseFloat($(this).val());

            if($thisValue === $eachValue) {
                $(this).prop('checked', true);
            } else {
                $(this).prop('checked', false);
            }
        });
    });

    $('input[name="engine-capacity"]').on('click', function() {
        $('#calcCapacity').val($(this).val());
    });

    $('#calcCapacity').on('keyup', function() {
        var $thisValue = $(this).val();

        $('input[name="engine-capacity"]').each(function() {
            var $eachValue = $(this).val();

            if($thisValue === $eachValue) {
                $(this).prop('checked', true);
            } else {
                $(this).prop('checked', false);
            }
        });
    });

    $('input[name="engine-type"]').on('change', function() {
        if($(this).val() == 'electro') {
            $('.volume').addClass('disabledBlock');
            $('.capacity').removeClass('disabledBlock');
        } else {
            $('.volume').removeClass('disabledBlock');
            $('.capacity').addClass('disabledBlock');
        }
    });

    function calculateCustoms() {

        var eur;
        var usd;

        //при клике на расчет будут выполнены запросы на получение актуальных курсов валют по нацбанку
        //запрос к api нацбанка для получения курса евро
        $.ajax({
            url: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&json", //&json
            type: "GET",
            async: false,

            success: function (data) {
                // console.log(data);
                eur = data;
            }
        });


        //запрос к api нацбанка для получения курса долара
        $.ajax({
            url: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json", //&json
            type: "GET",
            async: false,

            success: function (data) {
                // console.log(data);
                usd = data;
            }
        });

        var eurRate = eur[0].rate;
        var usdRate = usd[0].rate;

        var euro_usd = eurRate / usdRate;// Курс евро к доллару (ренее вбивался вручную)


        // var euro_usd = 1.1343;
        var servicePrice = 550; // Комплекс константа
        var $valCost = $('#calcCost').val().replace(' ', '');
        var $valYear = $('#calcYear').val();
        var $valVolume = $('#calcVolume').val();
        var $valCapacity = $('#calcCapacity').val();
        var $engineType = $('input[name="engine-type"]:checked').val();
        var fuelRatio;
        var hasError = false;
        var currYear = (new Date()).getFullYear();
        var deltaYear = currYear - (parseInt($valYear) + 1);
        var total = 0;

        if(deltaYear < 1) {
            deltaYear = 1;
        }

        if(deltaYear > 15) {
            deltaYear = 15;
        }

        if ($valCost === '' || $valCost === undefined) {
            $('#calcCost').addClass('isEmpty');
            hasError = true;
        } else {
            $('#calcCost').removeClass('isEmpty');
        }

        if ($valYear === '' || $valYear === undefined) {
            $('#calcYear').addClass('isEmpty');
            hasError = true;
        } else {
            $('#calcYear').removeClass('isEmpty');
        }

        if (($valVolume === '' || $valVolume === undefined) && $engineType != 'electro') {
            $('#calcVolume').addClass('isEmpty');
            hasError = true;
        } else {
            $('#calcVolume').removeClass('isEmpty');
        }

        if (($valCapacity === '' || $valCapacity === undefined) && $engineType == 'electro') {
            $('#calcCapacity').addClass('isEmpty');
            hasError = true;
        } else {
            $('#calcCapacity').removeClass('isEmpty');
        }

        if(hasError) {
            $(".total_price").slideUp(300);
            return false;
        }

        if($engineType === 'gasoline') {
            if($valVolume <= 3) {
                fuelRatio = 50;
            } else {
                fuelRatio = 100;
            }
        }

        if($engineType === 'diesel') {
            if($valVolume <= 3) {
                fuelRatio = 75;
            } else {
                fuelRatio = 150;
            }
        }

        if($engineType === 'electro') {
            total = (parseFloat($valCapacity) * euro_usd); // Итого электро
            // total = (parseFloat(Math.round($valCapacity) * euro_usd)); // Итого электро

            console.group('Проверка данных');
            console.log('Тотал: '+total.toFixed(2));
            console.groupEnd();
        } else {
            var duty = $valCost * 0.1; // Пошлина 10% от суммы авто
            var excise = (fuelRatio * euro_usd) * parseFloat($valVolume) * deltaYear; // Акциз от коэффициента объема, суммы и коэффициента года
            var vat = (parseFloat($valCost) + parseFloat(duty) + parseFloat(excise)) * 0.2; // НДС 20%

            total = duty + excise + vat; // Итого бензин или дизель

            console.group('Проверка данных');
            console.log('Тотал: '+excise+ ' = Коэффициент:' +fuelRatio+ ' * Объем:' +parseFloat($valVolume)+ ' * Разница лет:' +deltaYear);
            console.log('Тотал: '+total.toFixed(2)+' Стоимость:'+$valCost+' Пошлина:'+duty.toFixed(2)+' + Акциз:'+excise.toFixed(2)+' + НДС:'+vat.toFixed(2));
            console.groupEnd();
        }

        $("#customsClearance").html(parseFloat(total).toFixed(2)); // Таможня
        // $("#customsClearance").html(Math.round(parseFloat(total).toFixed(2))); // Таможня

        $("#customsService").html(parseFloat(servicePrice)); // Комплекс

        $("#customsTotal").html((parseFloat(total.toFixed(2)) + parseFloat(servicePrice)).toFixed(2)); // Сумма = Таможня + Комплекс
        // $("#customsTotal").html(Math.round((parseFloat(total.toFixed(2)) + parseFloat(servicePrice)).toFixed(2))); // Сумма = Таможня + Комплекс

        $(".total_price").slideDown(300);

        return true;
    }

    $('#calculateCustoms').on('click', function() {
        calculateCustoms();
        $(this).blur();
    });
    // END Calculator customs
