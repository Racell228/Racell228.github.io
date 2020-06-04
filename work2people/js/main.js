$(document).ready(function() {
  $('.mobile_filters').click(function(event) {
      event.preventDefault();
      $('.filters_container').show();
      $('body,html').addClass('hidden');
  });
});
$(document).ready(function() {
  $('.close_filters').click(function(event) {
      event.preventDefault();
      $('.filters_container').hide();
      $('body,html').removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.job_apply').click(function(event) {
      event.preventDefault();
      $('.attach_overlay').show();
      $('body,html').addClass('hidden');
  });
}); 
$(document).ready(function() {
  $('.close_modal').click(function(event) {
      event.preventDefault();
      $('.attach_overlay').hide();
      $('.done_overlay').hide();
      $('.error_overlay').hide();
      $('body,html').removeClass('hidden');
  });
}); 

$(document).ready(function() {
  $('.attach_apply').click(function(event) {
      event.preventDefault();
      $('.done_overlay').show();
      $('.attach_overlay').hide();
      $('body,html').addClass('hidden');
  });
}); 
$(document).ready(function() {
  $('.attach_cancel').click(function(event) {
      event.preventDefault();
      $('.error_overlay').show();
      $('.attach_overlay').hide();
      $('body,html').addClass('hidden');
  });
}); 

$(function(){
  $('.filters_checkbox h4').on('click', function(){
    $(this).find('span').toggleClass('rotate_arrow');
    $(this).parent().toggleClass('filters_checkbox_active');
    $(this).parent().removeClass('filters_checkbox_show_all');
    $(this).parent().find('.filters_more_company').show();
  });
});

$(function(){
  $('.filters_more_company').on('click', function(){
    $(this).hide();
    $(this).parent().toggleClass('filters_checkbox_show_all');
  });
});
















var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function(input){
  var label  = input.nextElementSibling,
      labelVal = label.innerHTML;
  input.addEventListener('change', function(e){
    var fileName = '';
    if( this.files && this.files.length > 1 )
      fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    else
      fileName = e.target.value.split( '\\' ).pop();
    if( fileName )
      label.querySelector( 'span' ).innerHTML = fileName;
    else
      label.innerHTML = labelVal;
  });
});





$(function() {

  $('select').styler();

});