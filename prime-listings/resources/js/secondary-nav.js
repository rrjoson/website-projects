(function ($) {
	$(document).ready(function(){

		// TODO: Optimize Selector
		// TODO: Optimize Selector
		// TODO: Beautify Tranisition

	    $(function () {
	    	$(window).scroll(function () {

				var topElement = $('#top-elem').offset().top;
				var scrollTop = $(this).scrollTop();

				// set distance user needs to scroll before we start fadeIn
				if ( scrollTop > topElement - 145) {
					$('.secondary-navigation').fadeIn();
				} else {
					$('.secondary-navigation').fadeOut();
				}
			});
		});
	});
}(jQuery));