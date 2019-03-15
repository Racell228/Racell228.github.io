// $(document).mouseleave(function(e){
//     if (e.clientY < 10) {
//         $(".exit").fadeIn("fast");
//     }    
// });
// $(document).click(function(e) {
//     if (($(".exit").is(':visible')) && (!$(e.target).closest(".exit .body").length)) {
//         $(".exit").remove();
//     }
// });
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