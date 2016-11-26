var config = require('./config');

var uri = process.env.MONGOLAB_URI || config.mongoUri;

var mongoose = require('mongoose');

mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Failed to connect to mongodb', err);
});

db.once('open', function (resp) {
    console.log('Connected to mongodb, uri: ' + uri);
});

var summarySchema = mongoose.Schema({
    "summary_date": Date,
    "day_start": Date,
    "day_end": Date,
    "timezone": Number,
    "score": Number,
    "score_stay_active": Number,
    "score_move_every_hour": Number,
    "score_meet_daily_targets": Number,
    "score_training_frequency": Number,
    "score_training_volume": Number,
    "score_recovery_time": Number,
    "daily_movement": Number,
    "non_wear": Number,
    "rest": Number,
    "inactive": Number,
    "inactivity_alerts": Number,
    "low": Number,
    "medium": Number,
    "high": Number,
    "steps": Number,
    "cal_total": Number,
    "cal_active": Number,
    "met_min_inactive": Number,
    "met_min_low": Number,
    "met_min_medium_plus": Number,
    "met_min_medium": Number,
    "met_min_high": Number,
    "average_met": Number,
    "class_5min": String,
    "met_1min": [Number]
});

exports.Summary = mongoose.model('Summary', summarySchema);
