var $ = require('jquery');

module.exports = function() {
	console.log('top');
	$('#body').scrollTop(0);
	return false;
}