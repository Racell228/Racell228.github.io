
var timer = true;


function changetimer() {
  timer = true;
}

let i = 1;
setTimeout(function run() {
  changetimer();
  setTimeout(run, 1000);
}, 1000);


$('.page').on('wheel', (function(e) {

var count = $('.number').val();
  if (e.originalEvent.deltaY > 50) {
    if (timer === true) {
        $(this).addClass(`step_${count}`);
        document.querySelector('.number').stepUp();
        timer = false;
      }
  } else {
      if (document.querySelector(".number").value > "0" && timer === true) {
        $(this).removeClass(`step_${count}`);
        document.querySelector('.number').stepDown();
        timer = false;
    }
  } 
}));

