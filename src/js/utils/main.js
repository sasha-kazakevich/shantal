var $ = require('jquery');
var scroll = require('./scroll');

var callback = {
	main: function(ctx,next){
		$('#title').click(function() {
			$('#map').lightbox_me();
		});

		$("#cert").on("click",function(){
			$('html,body').animate({scrollTop: 2486},800);
		});
	},
	parik: function(ctx,next){
		scroll();
	},
	depil: function(ctx,next){
		scroll();
	},
	nails: function(ctx,next){
		scroll();
	},
	kosmo: function(ctx,next){
		scroll();
	}
}



module.exports = callback;