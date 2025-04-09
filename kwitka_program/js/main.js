$(document).ready(function() {
    $('.bonus_faq_item_title').click(function(){
        event.preventDefault();
        $(this).parent().find('.bonus_faq_item_answer').toggle(400);
        $(this).find('img').toggleClass('active');
    });
});