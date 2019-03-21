
$(document).mouseleave(function(e){
    if (e.clientY < 10) {
        $(".exitblock").fadeIn("fast");
    }    
});
$(document).click(function(e) {
    if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
        $(".exitblock").remove();
    }
});
jQuery(function(f){
    var element = f('#btn_up');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 700 ? 'In': 'Out')](100);           
    });
}); 
jQuery(document).ready(function() {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});