var express = require('express');
var router = express.Router();
var avg_count = require('../models/ratings_model');

router.get('/:comm_id', function (req, res, next) {


    avg_count.getAvgRating(req.params.comm_id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});

module.exports=router;