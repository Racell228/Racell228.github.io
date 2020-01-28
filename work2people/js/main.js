  // Открываем dropdown
  $('.dropdown').on('click', function() {
    $(this).toggleClass('active');
  });


  // Закрываем dropdown при клике по document
  $(document).on('click', function(e) {
    if ($(e.target).closest(".dropdown").length) return;
    $(".dropdown").removeClass('active');
    e.stopPropagation();
  });