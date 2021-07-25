$(function(){
	$('.multiple-items').slick({
	 infinite: true,
	 // რამდენი სურათი გამოჩნდეს
	 slidesToShow: 1,
	 // სლაიდის დროს რამდენი ელემნტით გადავიდეს 
	 slidesToScroll: 1,
	 // რომ გამოჩნდეს ღილაკები
	 arrows: true,
	 // რომ გამოჩნდეს ბურთულები
	 dots: false,
	 // responsiv-ის კოდი
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