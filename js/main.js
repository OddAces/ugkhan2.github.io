$(document).ready(function() {

	// rollover Effect in Membership HTML.
	(function () {
		$package2 = $('#package2'); // Silver Package
		$package2.hover(rollover, rollout);

		$package3 = $('#package3'); // Gold Package
		$package3.hover(rollover, rollout);

		$package4 = $('#package4'); //Premium Package
		$package4.hover(rollover, rollout);

		function rollover(){
			$(this).addClass('rollover')
			$(this).children('.v-div').css({   // v-div adds triangle on packages over hover.
				'border-top': '15px solid #1b7410',
				'border-left': $(this).width()/2 +'px solid transparent',
				'border-right': $(this).width()/2 +'px solid transparent'
			});
			$(this).children('h4').addClass('package-heading-hover');
			$(this).children('.btn').addClass('btn-hover');
		}
		function rollout(){
			$(this).removeClass('rollover')
			$(this).children('.v-div').css('border-top', '15px solid transparent');
			$(this).children('h4').removeClass('package-heading-hover');
			$(this).children('.btn').removeClass('btn-hover');
		}
	}());

	// changing media icon images on hover.
	(function () {
		$mediaIcons = $('.icon');
		$mediaIcons.hover(function () {
			$img = $(this).children('.row').children('div.img').children('img');
			$img.hide();
			$img.next().show();
		},function () {
			$img = $(this).children('.row').children('div.img').children('img');
			$img.show();
			$img.next().hide();
		});
	})();

});
