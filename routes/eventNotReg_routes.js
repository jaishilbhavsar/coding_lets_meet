var express = require('express');
var router = express.Router();
var events = require('../models/event_model');

router.get('/:id', function (req, res, next) {

    events.getAllUpcNotReg(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
            //console.log(rows);
        }
    });

});

module.exports = router;