var router = require('express').Router();
var screen = require('./_helpers').Screen;
var createError = require('../error').createError;
var Summary = require('../db').Summary;

router.get('/', function(req, res, next) {
    var params;
    var err = new Error();
    var query;
    var remove;

    err.status = 400;
    err.message = 'Bad Request';

    // simple validation in order to save db from garbage
    if (!req || !req.query) {
        res.status(err.status);
        res.send(createError(err, 'GET /events: No query params'));
        return;
    }

    params = req.query;
    if (params.date) {
    }

    Summary.find({}, function (err, objects) {
        if (err) {
            console.log('GET /summary: Failed to find Summary', err);
            res.status(err.status);
            res.send(createError(err, 'GET /summary: Failed to find Summary'));
            return;
        }

        console.log('GET /summary: Query was successful', objects);
        res.send({
            success     : true,
            timestamp   : new Date().toISOString(),
            data        : objects
        });
    });
});

module.exports = router;
