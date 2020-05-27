
$(document).ready(function(){

$('.home_info_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  speed:2000,
  autoplay: true,
  autoplaySpeed: 3000,


});

$(".resp_hum").click(function(){


	$("#header .header_fluid nav ul").slideToggle()
})


var vids = $(".home_video_box video"); 
	$.each(vids, function(){
	       this.controls = false; 
	}); 
    $(".home_video_box video").click(function() {
	  if (this.paused) {
	    this.play();
	  } else {
	    this.pause();
	  }
 	 });
	$(".home_video_box").click(function() {
		$(this).find(".video_decor").toggleClass("active");
	})

})