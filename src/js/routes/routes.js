var createMed = require('../utils/createMed');

var routes = {};

var namePage = ['main','parik','depil','nails','kosmo'];

  namePage.forEach(function(el){
    createMed(el,routes);
  });

 module.exports = routes;