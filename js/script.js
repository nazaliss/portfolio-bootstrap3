// Scrol
$(".to-page").on("click", function (e) {
	$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 50 }, 1000);
	e.preventDefault();
});

// Years
$(document).ready(function () {
	$("#year").text(new Date().getFullYear());
});
