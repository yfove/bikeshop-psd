// amburgers

$(function(){

	$('.hamburger').on('click', function () {
		$('.hamburger').toggleClass('is-active');
	});

	$('.hamburger').on('click', function(){
		$('.topNav ul').toggleClass('active');
	});
});
