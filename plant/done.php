<?php
function cookie_get_set($parametr, $massive_name)
{
//Если есть какой то куки
if (isset($_COOKIE[$massive_name])) {
    foreach ($_COOKIE[$massive_name] as $name => $value) {
        $name = htmlspecialchars($name);
        $value = htmlspecialchars($value);

        $idx_last =  $name;

        //echo "$name : $value <br />\n";

        if($value == $parametr)
        {
          return true;
          break; //Совпало. Получили true
        }


    }
    
    $new = (int)$idx_last + 1;
    setcookie($massive_name. "[$new]", $parametr, time() + 86400);

    //phones + offers связку будем чекать. Совпадает = > дубль
}
else 
{
  //Куки нету
  setcookie($massive_name. "[0]", $parametr, time() + 86400);
  return false; //Дубликата нету
}
}

function get_all_get()
{
        $output = "?"; 
        $firstRun = true; 
        foreach($_GET as $key=>$val) { 
        if($key != $parameter) { 
            if(!$firstRun) { 
                $output .= "&"; 
            } else { 
                $firstRun = false; 
            } 
            $output .= $key."=".$val;
         } 
    } 

    return $output;
}

function addOrUpdateUrlParam($name, $value)
{
  if( !count($_GET) ) {
  header('Location: ?' . $name . '=' . $value);
  }
  else {
    // $old = get_all_get();
    // header('Location: ' . $old . '&' . $name . '='. $value);

    //Парсим ссылку
    //Добавляем  и наш параметр

    //stackoverflow
    // if(!isset($_GET['test'])) {
    //  $_SERVER['REQUEST_URI'] .= '&test='.$newval;
  }


}

//error_reporting(E_ALL);//Для отладки
error_reporting(-1);

$phone = $_POST['phone']; //Получаем телефон юзера, заполненного на форме 

$offer = "Растения хищники"; //Что передаем на сервер
$offer_eng = "21345reegreghishniki";// На английском название оффера (по нему будем смотреть дубликат) - не передается в кц

        if (isset($_POST['name']))//проверяем существует ли имя на ленде
        {
        	$name = $_POST['name']; //Да, тогда имя передаем
        }
        else 
        {
        	$name = "Лендинг без имени"; //Без имени
        }

        $next_step = false;
        if (strlen($phone) > 5) //Проверка телефона на длину.
        {
          $phone_valid = true; //Телефон валиден - да

          $chars_phone = str_split($phone);//Преобразуем строку в массив символов

          foreach ($chars_phone as $value) 
          {

            $isDigit = ctype_digit($value);

            if ( $value == '(' || $value == ')' || $value == '-' || $value == '+' || ctype_digit($value) )
            {
              //НЕ чего не делаем. Все подпадает под наши параметры
            }
            else 
            {
              //Нашли мусорные символы => автоматом телефон не валиден
              $phone_valid = false;
              break; //Можно смело покидать цикл.
            }
            
          }

          if ($phone_valid == false)
          {
            $line1 = "Ошибка! Заказ не может быть принят!";
            $color1 = "#f50000"; //Цвет заголовка. Красный

            $line2 = "Причина: Ваш телефон не верен. Вероятнее в нем присутствуют символы английского или русского алфавита!";


            $date = date("m.d.y"); ;
            $time = date("H:i:s");
            //Записываем в файл со статусом - телефон не прошел проверку на валидность!!;
            $fp_bad = fopen("bad_leads.txt", "a"); // Открываем файл в режиме записи 
            $mytext = "Date: ". $date. ", Time: ". $time. ", ";
            $mytext.= "Товар: ". $offer . ", ";
            $mytext.= "Имя: ". $name . ", ";
            $mytext.= "Телефон: ".$phone. ", ";
            $mytext.= "Причина: "."Есть символы англ/русского алфавита.". ";\r\n";

            $go_bad = fwrite($fp_bad, $mytext); // Запись в файл
            fclose($fp_bad); //Закрытие файла
          }
          else
          {
            //Тут проверям заказ на дубль. 
            //Если заказа такого не было => добавляем в массив новый заказ. Выводим что все оК!

            //Если такой заказ есть. Выводим сообщение что дубль заказа. Текст нейтральный. Мол вы уже отправляли подобный заказ.
            //Если есть необходимость, поменяйте данные. Если все ввели верно - ждите звонка оператора.
            //И текст который вбивал пользователь.. Попровбовать r\n лайны распилить или просто \r || \n

            //Оставляем только цифры
            $phone_digitonly = preg_replace("/[^0-9]/", '', $phone); //Оставляя только цифры в телефоне

            $dublicate_phone = cookie_get_set($phone_digitonly, "phones");
            $dublicate_offer = cookie_get_set($offer_eng, "offers");



            if ($dublicate_phone==true && $dublicate_offer==true)
            {
              $line1 = "Такие данные уже есть в системе";
              $color1 = "#5c58d2";

              $line2 = "Вероятно вы отправляли идентичный заказ. <br>&nbsp;Если вы считаете, что есть необходимость изменить данные, отправьте их снова.";
              $line2.= "<br>Данные которые вы уже отправляли:"."Телефон: ". $phone;

              //Пишемся в дубликат!
              $date = date("m.d.y"); ;
              $time = date("H:i:s");
              //Записываем в файл со статусом - телефон не прошел проверку на валидность!!;
              $fp_dubl = fopen("duplicate_leads.txt", "a"); // Открываем файл в режиме записи 
              $mytext = "Date: ". $date. ", Time: ". $time. ", ";
              $mytext.= "Товар: ". $offer . ", ";
              $mytext.= "Имя: ". $name . ", ";
              $mytext.= "Телефон: ".$phone. ", ";
              $mytext.= "Причина: "."Дубликат.". ";\r\n";

              $go_dubl = fwrite($fp_dubl, $mytext); // Запись в файл
              fclose($fp_dubl); //Закрытие файла




            }
            else 
            {
              $line1 = "Спасибо";
              $color1 = "#212121";

              $line2 = "Ваш заказ принят к обработке. Наш менеджер свяжется с вами в ближайшее время!";

              //echo "good!!";

              //echo "utm = ". $utm_1;

              $url = 'https://ekowater.leadvertex.ru/api/webmaster/v2/addOrder.html?webmasterID=89&token=380000';


              $data = [
              'phone' => $phone, //телефон
              'fio' => $name, //имя
              'domain' => $offer,
              'price' => '199',
              'utm_content' => 'utm_content-info',
			  'utm_source' => $_POST['clickid'],
              'additional1' => 'additional1-info'
              ];

              $process = curl_init();
              curl_setopt($process, CURLOPT_HEADER, 0);
              curl_setopt($process, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.0.3705; .NET CLR 1.1.4322; Media Center PC 4.0)");
              curl_setopt($process, CURLOPT_RETURNTRANSFER, 1);
              curl_setopt($process, CURLOPT_FOLLOWLOCATION, 0);
              curl_setopt($process, CURLOPT_TIMEOUT, 20);
              curl_setopt($process, CURLOPT_SSL_VERIFYPEER, false);
              curl_setopt($process, CURLOPT_POST, true);
              curl_setopt($process, CURLOPT_POSTFIELDS, $data);
              curl_setopt($process, CURLOPT_URL, $url);

              $return = curl_exec($process); //это потом тоже снести, вместо этого страницу спасибо и все!

              //addOrUpdateUrlParam('status', 'order_success');

              curl_close($process);
              //two step..
              $date = date("m.d.y"); ;
              $time = date("H:i:s");
              //$return уже есть..

              $fp = fopen("leads.txt", "a"); // Открываем файл в режиме записи 
              $mytext = "Date: ". $date. ", Time: ". $time. ", ";
              $mytext.= "Товар: ". $offer . ", ";
              $mytext.= "Имя: ". $name . ", ";
              $mytext.= "Телефон: ".$_POST['phone']. ", ";
              $mytext.= "Ответ от сервера: ".$return. ";\r\n";

              $go = fwrite($fp, $mytext); // Запись в файл
              fclose($fp); //Закрытие файла

              header('Location: thanks/index.html');
            }
            

            
          }

        }
        else 
        {
          $line1 = "Ошибка! Заказ не может быть принят!";
          $color1 = "#f50000"; //Цвет заголовка. Красный

          $line2 = "Причина: Телефон слишком короткий, вероятнее он введен не верно.";


          $date = date("m.d.y"); ;
          $time = date("H:i:s");
          //Записываем в файл со статусом - телефон не прошел проверку на валидность!!;
          $fp_bad = fopen("bad_leads.txt", "a"); // Открываем файл в режиме записи 
          $mytext = "Date: ". $date. ", Time: ". $time. ", ";
          $mytext.= "Товар: ". $offer . ", ";
          $mytext.= "Имя: ". $name . ", ";
          $mytext.= "Телефон: ".$phone. ", ";
          $mytext.= "Причина: "."Телефон короткий.". ";\r\n";

          $go_bad = fwrite($fp_bad, $mytext); // Запись в файл
          fclose($fp_bad); //Закрытие файла
        }


?>

<!DOCTYPE html>
<html lang="ru">
<html>
<head>
    <meta charset="UTF-8">
	<title>Информация о заказе</title>
</head>
<body>
<style type="text/css">
a.button8 {
  display: inline-block;
  color: white;
  text-align: center;
  width: 20vw;
  margin-left: 38%;
  font-size:120%;
  font-weight: bold;
  text-decoration: none;
  user-select: none;

  padding-top: 1%;

  outline: none;
  border: 2px solid;
  border-radius: 1px;
  transition: 0.2s;
  font-family:Trebuchet MS,Helvetica,sans-serif;
} 

.button8
{

	height: 5vh;

    margin-left: 10vw;
    width: 16vw;

}

a.button8:hover { background: rgba(255,255,255,.2); }
a.button8:active { 
	
	color:black;}

@media screen and (max-width: 880px)
{
	a.button8
	{
		padding-left: 2%;
		padding-right: 2%;
		padding-top: 2vh;
		width: 45vw;
		margin-left: 25%;
	}


}



</style>

<p style="text-align:center">&nbsp;</p>

<p style="text-align:center">&nbsp;</p>

<p style="text-align:center">&nbsp;</p>

<p style="text-align:center">&nbsp;</p>

<p style="text-align:center">&nbsp;</p>
<p style="text-align:center">&nbsp;</p>
<p style="text-align:center">&nbsp;</p>

<p style="text-align:center"><span style="font-size:48px"><span style="font-family:Trebuchet MS,Helvetica,sans-serif"><span style="color:<?php echo $color1 ?>"><?php echo $line1 ?></span></span></span></p>

<p style="text-align:center"><span style="font-size:28px"><span style="font-family:Trebuchet MS,Helvetica,sans-serif"><span style="color:#000000"><span style="color:#808080"><?php echo $line2 ?></span></span></span></span></p>

<div style="background: #454545; padding: .5em 5px;"><a href="index.html" class="button8">Вернуться на сайт</a><br></div>
</body>
</html>