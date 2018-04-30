var express = require('express');
var router = express.Router();
var event = require('../models/event_model');

router.get('/:id?', function (req, res, next) {

    if(req.params.id)
    {
    event.getmyPastEvents(req.params.id,function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    })
    ;}

});

module.exports = router;