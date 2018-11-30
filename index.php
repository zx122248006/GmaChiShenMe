<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
	
	<title>
		<?php 
			$Hour = date("G");

			if($Hour  >= 7 && $Hour <12){
				echo '早上吃什么？';
			};
			if($Hour >= 12 && $Hour <17){
				echo '中午吃什么？';
			};	
			if($Hour >= 17 && $Hour <21){
				echo '晚上吃什么？';
			};
			if($Hour >= 22 || $Hour < 7 ){
				echo '宵夜吃什么？';
			};
		 ?>
	</title>
	<script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>

	<link rel="stylesheet" href="./index.css">
</head>
<body>
	<div class="back">
	</div>

	<div class="info">
		<p class="eat"></p>
		<p class="text"></p>
		<div class="start">点击</div>
	</div>
	
</body>
<script src="./main.js"></script>
</html>