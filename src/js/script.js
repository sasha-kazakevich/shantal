require('./routes/app');
var $ = require('jquery');
require('./utils/ligth');

$(document).ready(function(){
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


	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
			$("#up").fadeIn();
		}else $("#up").fadeOut();
	});

	$("#up").click(function(){
		console.log("click");
		$("html,body").animate({scrollTop: 0}, 1000);
		return false;
	});


    var map;

   		ymaps.ready(function(){


   		var placemark = new ymaps.Placemark([53.946843,27.68808]);
        map = new ymaps.Map(document.getElementById('map'), {
            center: [53.946843, 27.68808],
            zoom: 16
        });
        map.geoObjects.add(placemark);
        
    });

});
