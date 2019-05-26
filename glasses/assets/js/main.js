jQuery(function(f){
    var element = f('.btn_up');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 700 ? 'In': 'Out')](100);           
    });
}); 
jQuery(document).ready(function() {
  jQuery("btn_up").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});

document.getElementById('i1').value = document.location.href;
document.forms.form1.i1.value = document.location.href; 