/* SCROLL*/

window.onscroll = function (){
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    
    var elemento1 = document.getElementById("icon_fork");
    var elemento2 = document.getElementById("icon_fire");

    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.2 + "px";
}

/*glider*/

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			breakpoint: 450,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},{
			  // screens greater than >= 1024px
			breakpoint: 800,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
			}
		]
	});
});

