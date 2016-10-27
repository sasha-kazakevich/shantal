var $ = require('jquery'),
 get = require('./get');

module.exports = function createMed(name, route){
  Object.defineProperty(route, name, {
      value: function(ctx,next) {
        get('templates/'+name+'.html', function (html) {
          $('#content').empty().append(html);
          next();
      });
    }
  });
}
