var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var events = require('../models/event_model');

router.post('/', function (req, res, next) {

    events.deleteAllEvents(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;