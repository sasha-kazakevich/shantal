var routes = require('./routes');
var callback = require('../utils/main');
var page = require('page');

page('/', routes.main,callback.main);
page('/parik',routes.parik,callback.parik);
page('/depil', routes.depil,callback.depil);
page('/nails', routes.nails,callback.nails);
page('/kosmo', routes.kosmo,callback.kosmo);

page();