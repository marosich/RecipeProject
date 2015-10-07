/* CURRENTLY IN: javascript/main.js */

(function(){

	console.log('main.js connected');
	$('.image-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,

		

	});

	var v = $('.slick-prev.slick-arrow');
	$(v).text("<");

	var z = $('.slick-next.slick-arrow');
	$(z).text(">");
})(); // IIFE