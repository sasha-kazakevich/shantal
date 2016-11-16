var routes = require('./routes');
var callback = require('../utils/main');
var page = require('page');

page('/', routes.main,callback.main);
page('/barbershop',routes.parik,callback.parik);
page('/depilation', routes.depil,callback.depil);
page('/nails', routes.nails,callback.nails);
page('/cosmetology', routes.kosmo,callback.kosmo);


page();