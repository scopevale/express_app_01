
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , booking = require('./routes/booking')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('6JH90829lwI0Ey5wV9fxEwbuy8nVoJMAuxNMK4eB'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
  app.use(express.errorHandler());        
});

app.get('/', routes.index);
app.get('/booking', booking.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port %s in %s mode", app.get('port'), app.settings.env);
});
