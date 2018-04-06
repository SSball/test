

<?php $__env->startSection('content'); ?>
		
	<div id="infowindow"><p>Benvenuto a Zapper! Per giocare devi connetterti o registrarti se questa e' la prima volta che giochi.
				 			Il gioco consiste nello sparare (cliccare) agli UFO per superare i livelli, migliorare 
							il proprio punteggio e scalare la classifica. Il gioco termina se non riesci ad annientare almeno
							il 70% degli avversari in ogni livello o se superi il settimo livello con successo.
							Nella schermata di gioco puoi visualizzare il livello corrente, il tuo punteggio attuale ed il numero di uccisioni per livello.
							In qualsiasi momento puoi consultare il tuo record personale e la top 5 
							o fare log out per disconnetterti.   Buon divertimento!
	</p></div>
	<div>
		<a href="http://validator.w3.org/check?uri=referer">
			<img src="http://www.w3.org/Icons/valid-html401" alt="Valid HTML 4.01 Strict" height="31" width="88">
		</a>
      	<a href="http://jigsaw.w3.org/css-validator/check/referer">
    		<img style="border:0;width:88px;height:31px" src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!">
		</a>
		<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">			
			<img alt="Licenza Creative Commons"  src="../media/cc.png">
		</a>
	</div>

	<div class="creativecommons">
		<span >Zapper</span> � distribuito con Licenza 
		<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
		Creative Commons Attribuzione - Non commerciale - Condividi allo stesso modo 4.0 Internazionale</a>.
	</div>

	<p>

  </p>
		
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>