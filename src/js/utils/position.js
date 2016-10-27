var $ = require('jquery');

module.exports = function(){
	$(".menu").on("click","a",function(event){
		var elem = event.target.className;

			switch (elem) {
				case "b":
				$('#body').animate({scrollTop: 450},800);
				break;
				case "c":
				$('#body').animate({scrollTop: 1430},800);
				break;
				case "d":
				$('#body').animate({scrollTop: 1916},800);
				break;
			}
		});
	return false;
}	