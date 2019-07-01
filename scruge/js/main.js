$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
});
$(document).ready(function() {
  $('.mobile_m').click(function(event) {
      event.preventDefault();
      $('.mobile_menu').toggleClass('window_mobile_translate').siblings().removeClass('window_mobile_translate');
      $('.mobile_menu').removeClass('window_mobile_static');
      $('html').toggleClass('hidden').siblings().removeClass('hidden');

  });
});
$(document).ready(function() {
  $('.language').click(function(event) {
      event.preventDefault();
      $('.language_view').addClass('view');
      $('.language_img').addClass('view_img');
  });
});
$(document).mouseup(function (e) {
    var container = $(".language_view");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

$(document).ready(function() {
  $('.privacy_href').click(function(event) {
      event.preventDefault();
      $('.privacy_content').toggleClass('answer').siblings().removeClass('answer');
      $('.privacy_arrow').toggleClass('answer_img').siblings().removeClass('answer_img');
      $('.doc_foot').toggleClass('doc_foot_view1').siblings().removeClass('doc_foot_view1');
  });
});
$(document).ready(function() {
  $('.terms_href').click(function(event) {
      event.preventDefault();
      $('.terms_content').toggleClass('answer').siblings().removeClass('answer');
      $('.terms_arrow').toggleClass('answer_img').siblings().removeClass('answer_img');
      $('.doc_foot').toggleClass('doc_foot_view2').siblings().removeClass('doc_foot_view2');
  });
});