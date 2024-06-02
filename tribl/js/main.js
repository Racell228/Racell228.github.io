
var timer = true;


function changetimer() {
  timer = true;
  console.log(timer);
}


setTimeout(function run() {
  changetimer();
  setTimeout(run, 2500);
}, 2500);


$('.page').on('mousewheel DOMMouseScroll wheel', (function(e) {

var count = $('.number').val();
  if (e.originalEvent.deltaY > 0) {
    if (timer === true) {
        $(this).addClass(`step_${count}`);
        document.querySelector('.number').stepUp();
        timer = false;
        console.log(timer);
      }
  } else {
      if (document.querySelector(".number").value > "0" && timer === true) {
        $(this).removeClass(`step_${count}`);
        document.querySelector('.number').stepDown();
        timer = false;
        console.log(timer);
    }
  } 
}));

$('.faq_item_overlay').click(function () {
  $(this).toggleClass('active').siblings().removeClass('active');
})