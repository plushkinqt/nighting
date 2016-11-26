var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var events = require('./routes/summary');
var createError = require('./error').createError;

var app = express();
var cors = require('cors');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/summary', events);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
if (app.get('env') === 'development') {
    // development error handler
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            success : false,
            error   : {
                status  : err.status,
                message : err.message
            }
        });
    });
} else {
    // production error handler
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            success : false,
            error   : {
                status  : err.status,
                message : err.message
            }
        });
    });
}

module.exports = app;
