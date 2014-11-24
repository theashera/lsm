function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

$(function(){
	$('.easyscroll').easyScroll();



	

	var orderForm = $("#order-form");

	$(".buy").on("click touchstart", function(event) {
		event.preventDefault();
		var target = $(this);
		var pictureName = target.data("name");

		orderForm.find("#order-form-picture-name").html(pictureName);
		orderForm.children("#order-form-name").val(pictureName);
		orderForm.fadeIn(400);
	});

	$('#discount-form-toggle').on('click touchstart', function() {
	  $('#discount-form').fadeIn(400);	
	  return false;
	})

	$('.js-video-preview').on('hover touchstart', function() {
	  $(this).hide();
	});

	$(".popup").fancybox({
		'showCloseButton': false,
		'showNavArrows':   false,
		'mouseWheel': false,
		'tpl': {
		  'wrap': '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div><div class="fancybox-controls"><a href="#" id="fancybox-zoom-in" class="fancybox-controls-zoom"><i class="fa fa-search-plus"></i></a><a href="#" id="fancybox-zoom-out" class="fancybox-controls-zoom"><i class="fa fa-search-minus"></i></a></div></div></div></div>'
		},
		'afterShow': function() {
		   $('.fancybox-image').smartZoom({'dblClickMaxScale' : 2});
		   $('#fancybox-zoom-in').on('click touchstart', function() {
		      $('.fancybox-image').smartZoom('zoom', 1);
		      return false;
			});

			$('#fancybox-zoom-out').on('click touchstart', function() {
		      $('.fancybox-image').smartZoom('zoom', -1);
		      return false;
			});	
		}
	});

	$('#thumbs-toggle').on('click', function() {
	  var $thumbs = $('.rsThumbsVer');
      if ($('.rsThumbsVer').hasClass('visible')) {        
        $thumbs.removeClass('visible');
        $thumbs.fadeOut(400);
        $('.rsArrow').removeClass('hidden');
        $('.royalSlider-left-text').show();
        $('.royalSlider-right-text').show();
      }
      else {
      	$thumbs.addClass('visible');
      	$thumbs.fadeIn(400);
      	$('.rsArrow').addClass('hidden');
      	$('.royalSlider-left-text').hide();
        $('.royalSlider-right-text').hide();   	
      }
      return false;
	});

	$('.js-jump-to-slide').on('click', function() {
		var slide = $(this).attr('data-rsSlide');
		var $slider = $("#gallery-1").data('royalSlider');
		$slider.goTo(slide);
	});

	// var gallery_1_offset = 236;

	var gallery_1 = $("#gallery-1").royalSlider({
		keyboardNavEnabled: true, 
		controlNavigation: 'none', 
		navigateByClick: false, 
		imageScaleMode: 'none', 
		loop: true, 
		slidesSpacing: 0, 
		imageAlignCenter: false, 
		imgHeight: 425, 
		arrowsNav: true, 
		addActiveClass: true, 
		arrowsNavAutoHide: false, 
		arrowsNavHideOnTouch: false, 
		transitionSpeed: 1200,
		fadeinLoadedSlide: false,
		sliderDrag: false,
		controlNavigation: 'thumbnails',
	    thumbs: {
	      orientation: 'vertical',
	      paddingBottom: 4,
	      appendSpan: true
	    }		 
	}).data('royalSlider');

	gallery_1.ev.on('rsAfterContentSet', function(e, slideObject) {
		var target = e.target;
		gallery_apocalisis(target)
	});

	gallery_1.ev.on('rsBeforeAnimStart', function(event) {
		var target = event.target;
		gallery_apocalisis(target);
	});

	$( window ).resize(function() {
		gallery_apocalisis(gallery_1);
	});

	function gallery_apocalisis(target) {
		var curSlide = target.currSlideId;
		// var numSlide = target.numSlides;
		// for (var i = numSlide - 1; i >= 0; i--) {
		// 	target.slidesJQ[i].find(".frame").css("left", "50%");
		// };
		// var prevSlide = (curSlide == 0) ? numSlide - 1 : curSlide - 1;
		// var nextSlide = (curSlide == numSlide - 1) ? 0 : curSlide + 1;

		var slideObj = target.slidesJQ[curSlide];
		var slideObjFrame = slideObj.find(".frame");
		var slideObj_width = slideObj.outerWidth();
		var slideObjFrame_width = slideObjFrame.width();
		var slideObjLeftText = slideObj.find(".royalSlider-left-text");
		var slideObjrightText = slideObj.find(".royalSlider-right-text");



		// var prevSlideObj = target.slidesJQ[prevSlide];
		// var prevSlideObjFrame = prevSlideObj.find(".frame");
		// var prevSlideObj_width = prevSlideObj.width();
		// var prevSlideObjFrame_width = prevSlideObjFrame.width();

		// var nextSlideObj = target.slidesJQ[nextSlide];
		// var nextSlideObjFrame = nextSlideObj.find(".frame");
		// var nextSlideObj_width = nextSlideObj.innerWidth();
		// var nextSlideObjFrame_width = nextSlideObjFrame.innerWidth();

		if ($('.rsThumbsVer').hasClass('visible')) {
			slideObjLeftText.hide();
			slideObjrightText.hide();
		}
		else {
			slideObjLeftText.show();
			slideObjrightText.show();
		}

		slideObjLeftText.css("left", ((slideObj_width - slideObjFrame_width)/4)+"px");
		slideObjrightText.css("right", ((slideObj_width - slideObjFrame_width)/4)+"px");

		// prevSlideObjFrame.css({
		// 	"left": (prevSlideObj_width - prevSlideObjFrame_width/2 - gallery_1_offset)+"px"
		// });
		// nextSlideObjFrame.css({
		// 	"left": (gallery_1_offset - 20 + nextSlideObjFrame_width/2)+"px"
		// });
	}

	$("#gallery-2").royalSlider({
		keyboardNavEnabled: true, 
		controlNavigation: 'bullets', 
		navigateByClick: false, 
		loop: true, 
		imgHeight: 170, 
		slidesSpacing: 0, 
		addActiveClass: true, 
		arrowsNav: false,
        visibleNearby: {
			enabled: true,
			centerArea: 0.55,
			center: true,
			breakpoint: 0,
			navigateByCenterClick: false
        }
	}); 

	$("#gallery-3").royalSlider({
		keyboardNavEnabled: true, 
		controlNavigation: 'none', 
		navigateByClick: false, 
		imageScaleMode: 'none', 
		loop: true, 
		slidesSpacing: 0, 
		imageAlignCenter: false, 
		imgHeight: 600, 
		addActiveClass: true, 
		arrowsNavAutoHide: false, 
		arrowsNavHideOnTouch: false,
		fadeinLoadedSlide: false, 
        visibleNearby: {
			enabled: true,
			centerArea: 0.5,
			center: true,
			breakpoint: 0,
			navigateByCenterClick: true
        }
	});

	$('#scene').parallax({
	  scalarX: 5,
	  scalarY: 50,
	  frictionX: 0.2,
	  frictionY: 0.3,
	});
});

$(window).load(function() {
  var $thumbs = $('.rsThumbsVer');
  $thumbs.hide();

  if (!detectmob()) {
    skrollr.init();
  }
});