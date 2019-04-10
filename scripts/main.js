$(document).ready(function() {

	function slideshow() {

		$("#preview-images-container > img:gt(0)").hide();

		setInterval(function() {

			$("#preview-images-container > img:first")
				.delay(1000)
				.fadeOut(3000)
				.next()
				.delay(1000)
				.fadeIn(2000)
				.end()
				.appendTo("#preview-images-container");
		}, 6000);
	}

	slideshow();
});