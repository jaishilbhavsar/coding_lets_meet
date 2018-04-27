var express = require('express');
var router = express.Router();
var comm_event_past = require('../models/event_community_model');

router.get('/:id', function (req, res, next) {

        comm_event_past.getCommunityByUpcomingEvent(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
});

module.exports = router;