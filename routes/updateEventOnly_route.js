var express = require('express');
var router = express.Router();
var events = require('../models/event_model');
router.put('/', function (req, res, next) {
    events.updateEventOnly(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;