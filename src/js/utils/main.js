var $ = require('jquery');
var scroll = require('./scroll');
var position = require('./position');


var callback = {
	main: function(ctx,next){
		$('#title').click(function() {
			$('#map').lightbox_me();
		});
	},
	parik: function(ctx,next){
		scroll();
		// position();
	},
	depil: function(ctx,next){
		scroll();
		// position();
	},
	nails: function(ctx,next){
		scroll();
		// position();
	},
	kosmo: function(ctx,next){
		scroll();
		// position();
	}
}



module.exports = callback;