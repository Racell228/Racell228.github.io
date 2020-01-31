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



