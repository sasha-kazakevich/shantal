var $ = require('jquery');
var cache = {};

module.exports = function get (url, cb) {
  if (cache[url]) return cb(cache[url]);
  $.ajax({
    url: url,
    success: function(data) {
      cache[url] = data;
      cb(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR, textStatus, errorThrown);
    },
    dataType: 'text'
  });
}