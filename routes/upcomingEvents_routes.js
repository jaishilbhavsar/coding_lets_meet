var express = require('express');
var router = express.Router();
var event = require('../models/event_model');

router.get('/', function (req, res, next) {

    event.getUpcomingEvents(function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});

module.exports = router;