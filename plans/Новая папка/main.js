
function calc() {
  const sum =
    $('[name="test1"]:checked').val() * $('[name="test2"]').val() +
    $('[name="test5"]:checked').get().reduce((acc, n) => acc + +$(n).val(), 0);
  $('#summ').text(sum);
}
$('#form--calc').on('input', calc);
calc();
