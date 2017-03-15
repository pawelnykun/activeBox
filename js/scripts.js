$(function() {
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