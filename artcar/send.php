<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$secondName = $_POST['secondName'];
$email = $_POST['email'];

// Формирование самого письма
$title = "Rezygnacja z przetwarzania danych osobowych";
$body = "
<h2>Rezygnuje z przetwarzania moich danych osobowych</h2>
<b>Imie:</b> $name<br>
<b>Nazwisko:</b> $secondName<br>
<b>E-mail:</b> $email<br><br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'it2.dilakviv@gmail.com'; // Логин на почте
    $mail->Password   = 'azeGn1.O'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('it2.dilakviv@gmail.com', 'Rezygnacja z przetwarzania danych osobowych'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('biuro@artcarserwis.pl');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);