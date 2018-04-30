var express = require('express');
var router = express.Router();
var all = require('../models/all_count_model');

router.get('/', function (req, res, next) {    
    all.userCount(function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
}

);

module.exports = router;