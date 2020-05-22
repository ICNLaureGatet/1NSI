<!DOCTYPE html>
<html>
    <head>
		<meta charset="utf-8" />
		<title>Heure</title>
    </head>


	<body>
		Bonjour, il est : <?php 
		date_default_timezone_set('UTC');
		echo date("H:i:s");
		?>
	</body>
</html>
