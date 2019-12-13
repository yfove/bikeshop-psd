// amburgers

$(document).ready(function(){

	// Initiate animate on scroll
	AOS.init();

	$('.hamburger').on('click', function () {
		$('.hamburger').toggleClass('is-active');
	});

	$('.hamburger').on('click', function(){
		$('.topNav ul').toggleClass('active');
	});

	// Initiate smooth scroll
    $('a').smoothScroll({
		speed: 1000
	});

	
});
