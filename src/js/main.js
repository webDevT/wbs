$(function(){

	$('.menu__btn').click(function(){
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
	})


// ------start sticky header------

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.header').addClass("sticky");
}
else{
$('.header').removeClass("sticky");
}
});

//-------end sticky header--------


if($(window).width() < 700) {
	$('.menu__item--sub').click(function(){
		$(this).toggleClass('active');
	})
}



})

