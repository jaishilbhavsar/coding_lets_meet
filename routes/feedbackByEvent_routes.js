var express = require('express');
var router = express.Router();
var feedback = require('../models/feedback_model')

router.get('/:id', function (req, res, next) {

    feedback.getFeedbackAndUserByEvent(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
            //sconsole.log(rows);
        }
    });

});

module.exports = router;