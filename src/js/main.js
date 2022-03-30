$(function(){

	$('.menu__btn').click(function(){
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
	})



 $(".top").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);

    });
  


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



$('.slider').slick({
prevArrow: $('.prev'),
nextArrow: $('.next'),
slidesToShow: 3.5,
dots: true,




// centerMode: true,
responsive: [
{
    breakpoint: 1200,
    settings: {
    slidesToShow: 2.5,  
    }
  },
{
    breakpoint: 992,
    settings: {
    slidesToShow: 2,  
    }
  },
  {
    breakpoint: 768,
    settings: {
    slidesToShow: 1,  
    }
  },
  
]
});



})

$(function () {
  var $videoContainer = $('#video'),
    $videoControls = $('.video-control'),
    $video = $('#myVideo')[0];

  $videoControls.click(function () {
    if ($video.paused) {
      $video.play();
      $videoContainer.addClass('video-is-playing');
    } else {
      $video.pause();
      $videoContainer.removeClass('video-is-playing');
      //  возвращаем постер
     // $video.load();
    }
  });
});