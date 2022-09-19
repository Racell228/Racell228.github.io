
$(document).ready(function() {
  all();
});
function all() {
  function item1() {
    $('.hero_anim_text:first-child').addClass('active');
  }
  function item2() {
    $('.hero_anim_text:nth-child(2)').addClass('active');
  }
  function item3() {
    $('.hero_anim_text:nth-child(3)').addClass('active');
  }
  function item4() {
    $('.hero_anim_text:nth-child(4)').addClass('active');
  }
  function item5() {
    $('.hero_anim_text:nth-child(5)').addClass('active');
  }
  
  setTimeout(item1, 1000);
  setTimeout(item2, 2000);
  setTimeout(item3, 3000);
  setTimeout(item4, 4000);
  setTimeout(item5, 5000);
};