var express = require('express');
var router = express.Router();
var event_community = require('../models/event_community_model');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {

        event_community.getCommunityByEventId(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {

        event_community.getEventsAndCommunity(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

module.exports = router;