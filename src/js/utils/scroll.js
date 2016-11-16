var $ = require('jquery');

module.exports = function() {
	$('html,body').scrollTop(0);
	return false;
}