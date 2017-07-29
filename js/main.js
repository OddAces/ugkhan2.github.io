$(document).ready(function() {

	// slider functions
	(function () {
		$first = $('#first');
		$second = $('#second');
		$third = $('#third');
		$currentBubble = $("#first");
		$current = $('.slide-show img:visible');

		$('.slide-show img:gt(0)').hide();
		$("#first").css('background-color', '#393939');
		setInterval(function () {
			current = $('.slide-show img:visible');
			$next = current.next().length? current.next():$('.slide-show img:eq(0)');
			$nextBubble = $currentBubble.next().length? $currentBubble.next(): $('#first');
			$current.fadeOut(1000);
			$currentBubble.css('background-color', 'white');
			$next.fadeIn(1000);
			$nextBubble.css('background-color', '#393939');
			$currentBubble=$nextBubble;
		},3000);

		$first.mouseover(bubbleHover);
		$second.mouseover(bubbleHover);
		$third.mouseover(bubbleHover);
		function bubbleHover() {
			$('.slide-show img').hide();
			$('.bullets span:eq(index)').css('background-color', '#393939');
			$('.bullets span:gt(index)').css('background-color', 'white');
			$('.slide-show img:eq(index)').fadeIn();
			$currentBubble=$(this);
			current = $('.slide-show img:visible');
		}
	}());

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
			$(this).children('.v-div').css({
				'border-top': '15px solid #318921',
				'border-left': $(this).width()/2 +'px solid transparent',
				'border-right': $(this).width()/2 +'px solid transparent'
			});
			$(this).children('h4').css({
				'background-color': '#318921',
				'border-radius': '3px'
			});
		}
		function rollout(){
			$(this).removeClass('rollover')
			$(this).children('.v-div').css('border-top', '15px solid transparent');
			$(this).children('h4').css({
				'background-color': '#23546B',
				'border-radius':'0'
			});
		}
	}());

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
