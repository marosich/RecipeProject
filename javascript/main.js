/* CURRENTLY IN: javascript/main.js */

(function(){

	console.log('main.js connected');
	$('.image-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	});

})(); // IIFE