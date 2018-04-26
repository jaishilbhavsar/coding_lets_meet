var express = require('express');
var router = express.Router();
var ratecount = require('../models/ratings_model');

router.get('/:rating&:comm_id', function (req, res, next) {


    ratecount.getRateCount(req.params.rating, req.params.comm_id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});

module.exports=router;