window.requestAnimationFrame = window.requestAnimationFrame

|| window.mozRequestAnimationFrame
|| window.webkitRequestAnimationFrame
|| window.msRequestAnimationFrame

|| function(f) {setTimeout(f, 1000 / 60)}

function parallaxEffect() {

	var scrollTop =  window.pageYOffset;

	var landingPage = document.getElementById("landing-page");
	var introParagraph = document.getElementById("intro-paragraph");

	if (scrollTop > 0) {

		landingPage.style.top = -scrollTop * .03 + "%";
		introParagraph.style.top = -scrollTop * .05 + "%";
	
	} 
}

window.addEventListener("scroll", function() {

	requestAnimationFrame(parallaxEffect);

}, false);

