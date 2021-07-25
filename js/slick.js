$(function(){
	$('.multiple-items').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	prevArrow: '<i class="fas fa-arrow-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-right next"></i>',
	 responsive:[
		 {
		    breakpoint: 768,
		    settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		   }
		 },
		 {
		    breakpoint: 480,
		    settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		   }
		 }
	 ]
   });    
 });