<?php
if(isset($_GET['w']) && !file_exists('./'.htmlspecialchars($_GET['w']))) {
   header('HTTP/1.1 404 Not Found');
   die('<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
   <html><head>
   <title>404 Not Found</title>
   </head><body>
   <h1>Not Found</h1>
   <p>The requested URL '.$_SERVER['REQUEST_URI'].' was not found on this server.</p>
   </body></html>');
}
else {
   $w = htmlspecialchars($_GET['w']);
   if($w == '') $w = 'index.html';
   ob_start();
   $b = @file_get_contents('./'.$w);
   
   if(stristr($w,'.html')) {
   
	// alt na logo
	$b = str_replace('<img src="img/logo.png" alt="ArtCar Serwis" />', '<img src="img/logo.png" alt="ArtCar" />', $b);
	$b = str_replace('<img src="https://artcarserwis.pl/img/logo.png" alt="ArtCar Serwis" />', '', $b);

   }
   echo $b;
}
?>