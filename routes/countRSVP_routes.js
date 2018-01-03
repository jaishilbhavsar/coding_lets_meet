var express = require('express');
var router = express.Router();
var rsvp = require('../models/rsvp_model');

router.get('/:id', function (req, res, next) {

    rsvp.getRSVPCountByEvent(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});

module.exports = router;