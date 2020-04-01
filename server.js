// // server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/src/build"));
var port = process.env.PORT || 3000;
app.listen(port);
console.log('server started ' + port);

var express = require('express');
var history = require('connect-history-api-fallback');
var app = express();

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static('build');
