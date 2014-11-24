/**
 * jQuery.easyScroll
 * Copyright (c) 2013 Alex Gill - hello@alexpetergill.com
 * Open Source
 * Date: 19/01/2013
 *
 * Example: $('ul.links').easyScroll();
 **/
;(function($){
	$.fn.easyScroll = function() {
		$(this).on('click', function(e){
			var elem = e.target;
			scroll(event, elem);
		});

		function scroll(e, elem) {
			if (e) {
				e.preventDefault();
			}

			var hash = elem.hash;

			var target = $(hash);

			$('html, body').stop().animate({
			    'scrollTop': target.offset().top - 90
			}, 500, 'swing', function () {
			    window.location.hash = hash;
			});
		}

	};
})(jQuery);