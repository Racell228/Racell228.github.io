
<?php 
// если была нажата кнопка "Отправить" 
if($_POST['submit']) {
        $title = 'Quiz';
        $quiz_item1 =  substr(htmlspecialchars(trim($_POST['name'])), 0, 1000);
        $quiz_item2 =  substr(htmlspecialchars(trim($_POST['surname'])), 0, 1000); 
        $quiz_item3 =  substr(htmlspecialchars(trim($_POST['email'])), 0, 1000); 
        $quiz_item4 =  substr(htmlspecialchars(trim($_POST['phone'])), 0, 1000); 
        
        $mess = '
        Name: '.$_POST['name'].'
        Surname: '.$_POST['surname'].'
        Email: '.$_POST['email'].'
        Phone: '.$_POST['phone'].'
        ';
        // $to - кому отправляем 
        $to = 'ignatenko.ura000000@gmail.com'; 
        // $from - от кого 
        $from='romgaz'; 
        // функция, которая отправляет наше письмо
        mail($to, $title, $mess, 'From:'.$from); 
        
} 
?> 

<!DOCTYPE html>
<html>
<head>
  <title>Thank you!</title>
  <link rel="stylesheet" type="text/css" href="style.css?v=1.2">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
<body>
        <div class="thank_you">
            <div class="thank_overlay">
                 <div class="thank_you_flex">
                    <a href="index.html" class="close"><img src="img/close.svg"></a>
                    <a href="index.html" class="thank_logo"><img src="img/logo.svg"></a>
                    <h1 class="thank_title">Vă mulțumesc!</h1>
                    <h1 class="thank_subtitle">Cererea dumneavoastră a fost trimisă!</h1>
                    <p class="thank_text">Așteptați să vă sune un manager pentru a vă putea confirma</p>
                </div>
            </div>
        </div>
</body>
</html>