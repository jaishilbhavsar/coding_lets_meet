var express = require('express');
var router = express.Router();
var user = require('../models/user_model');
router.put('/', function (req, res, next) {
    user.updateUserOnly(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;