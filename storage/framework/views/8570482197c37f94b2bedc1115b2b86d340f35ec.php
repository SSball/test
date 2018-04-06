

<?php $__env->startSection('content'); ?>

<head>
	<!-- auth info -->
	<meta name="author" content="Robert Margelli">
	<meta name="keywords" content="zapper,gioco,sparatutto,javascript">
	<meta name="description" content="Zapper: un gioco sparatutto basato su Javascript">

	<script type="text/javascript" src='../js/gamelogic.js'></script>
</head>

<body onload="inizializza();">

	<div id="gamewindow"></div>

	<div>
		<input type="button" value="Controlla classifica" onClick="document.location.href='punteggi.php'">
	</div>

</body>
</html>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>