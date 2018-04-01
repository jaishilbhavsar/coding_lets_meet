var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var events = require('../models/event_model');

router.get('/', function (req, res, next) {

    events.getUnApprovedEvent(function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.put('/', function (req, res, next) {
    console.log(req.body);

    events.verify_event(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    })
});

module.exports = router;