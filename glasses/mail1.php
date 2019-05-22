
<meta http-equiv='refresh' content='2; url=http://roman-steel.ru/index.html'>
<meta charset="UTF-8" />
<?php
if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}}
if (isset($_POST['number'])) {$number = $_POST['number']; if ($number == '') {unset($number);}}
 

if (isset($name) && isset($number)){
 
$address = "ignatenko.ura000000@gmail.com";
$mes = "Имя: $name \nНомер телефона: $number";
$send = mail ($address,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
if ($send == 'true')
{echo "Сообщение отправлено успешно, через 2 секунды Вы будете направлены на главную страницу блога <a href='http://roman-steel.ru/index.html'>Roman-Steel</a>,где сможете продолжить ваш просмотр";}
else {echo "Ошибка, сообщение не отправлено!";}
 
}
else
{
echo "Вы заполнили не все поля, вернитесь назад и заполните необходимые поля!";
}
?>