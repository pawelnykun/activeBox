$(function() {
	//scrollTo#
	$('a').click(function() {
		var href = $(this).attr("href");
    	$('html, body').animate({
      		scrollTop: $(href).offset().top
    	}, 500);
    return false;
	});

	//scrollTopButton
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('.scrollTopButton').addClass('show');
		} else {
			$('.scrollTopButton').removeClass('show');
		}
	});
 
	$('.scrollTopButton').click(function() {
		$('html, body').animate({scrollTop: 0}, 400, 'linear');
	});

	//Carousel
	//declaration and initialization of the variables
	var carousel = $("#carousel");
	var carouselList = carousel.find("ul.cites");
	var carouselMenu = carousel.find("ul.menu");
	//adding <li> elements depending on the number of photos
	carouselList.find("li").each(function() {
		carouselMenu.append("<li></li>");
	});

	var menuOption = carouselMenu.find("li");
	//adding class onload
	menuOption.first().addClass("active");
	//ater click function
	menuOption.click(function() {
		if( !$(this).hasClass("active") ) {
			target = $(this).index();
			moveSliderTo(target);
		}
	});
	//automoving
	function autoChangeSlide() {
		target = menuOption.siblings(".active").index();
        target == menuOption.length - 1 ? target = 0 : target += 1;
        moveSliderTo(target);
	}
	//moving to the selected slide
	function moveSliderTo(target) {
		carouselList.stop().animate({"left": -759 * target});
        menuOption.removeClass("active").eq(target).addClass("active");
        resetInterval();
	}
	//setting interval
	var autoMove = setInterval(function(){autoChangeSlide();}, 5000);
	//reseting interval
	function resetInterval() {
		clearInterval(autoMove);
		autoMove = setInterval(function(){autoChangeSlide();}, 5000);
	}
});