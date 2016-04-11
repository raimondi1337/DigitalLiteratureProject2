function type(str){
	$("#right").typed('reset');
	$("#right").typed({
		strings: [str],
		showCursor: false,
		typeSpeed: 0
	});
};

$("#one").click(function(){type("Now this is a story all about how")});
$("#two").click(function(){type("My life got flipped turned upside down")});