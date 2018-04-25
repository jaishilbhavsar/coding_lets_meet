var express = require('express');
var router = express.Router();
var community = require('../models/communities_model');
router.put('/', function (req, res, next) {
    community.updateCommunityOnly(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;