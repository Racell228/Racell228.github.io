
<meta http-equiv='refresh' content='2; url=http://roman-steel.ru/index.html'>
<meta charset="UTF-8" />
<?php
if (isset($_POST['mail'])) {$mail = $_POST['mail']; if ($mail == '') {unset($mail);}}
i
 

if (isset($mail)){
 
$address = "ignatenko.ura000000@gmail.com";
$mes = "Имя: $mail";
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