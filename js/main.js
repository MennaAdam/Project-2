
$(document).ready(function() {

//Adjust Header Height

	$('.main').height($(window).height());
// Navbar
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$(".change").css({
			"background": "white",
			"boxShadow": "0px -2px 3px",
			"position": "fixed",
			"top": "0",
			"left": "0",
			"right": "0"
		});
		$(".nav-link").css("color", "black");
		$(".navbar-brand").css("color", "black");
	} else {
		$(".change").css({
			"background": "transparent",
			"boxShadow": "0 0 0",
			"position": "static"
		});
		$(".nav-link").css("color", "white");
		$(".navbar-brand").css("color", "white");

	}
});


	//Smoth Scroll

	$(".nav-link").on('click', function(e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $("#" + $(this).data("scroll")).offset().top + 1
		}, 500);
	});


	// Open lightbox
	$('.lightbox-container').on('click', function(e) {
		e.preventDefault();
		var imageUrl = $(this).attr('href');
		var img = $('<img>');
		$('html').addClass('no-scroll');
		$('.lightbox-opend').css('display', 'block').append(img);
		$(img).attr('src', imageUrl);
		$('.change').css('position', 'relative');
	});

	// Close lightbox
	$('#close').on('click', function(e) {
		e.preventDefault();
		var img = $('<img>');
		$('.lightbox-opend img').remove();
		$('.lightbox-opend').css('display', 'none');
		$('html').removeClass('no-scroll');
		$('.change').css('position', 'fixed');
	});

});