//document.addEventListener("DOMContentLoaded", function() {
	//The first argument are the elements to which the plugin shall be initialized
	//The second argument has to be at least a empty object or a object with your desired options
	//OverlayScrollbars(document.querySelectorAll("body"), { });
//});
//For some yummy particles
window.onload = function() {
	Particles.init({
	  selector: '.background',
	  maxParticles: 450,
	  responsive: [
		{
		  breakpoint: 
	768
	,
		  options: {
			maxParticles: 
	200
	,
			color: 
	'#48F2E3'
	,
			connectParticles: 
	false
		  }
		}, {
		  breakpoint: 
	425
	,
		  options: {
			maxParticles: 
	100
	,
			connectParticles: 
	true
		  }
		}, {
		  breakpoint: 
	320
	,
		  options: {
			maxParticles: 
	0
	 
	// disables particles.js
		  }
		}
	  ]

	});
  };