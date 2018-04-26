var express = require('express');
var router = express.Router();
var posts = require('../models/post_model');
router.put('/', function (req, res, next) {
    posts.updatePostOnly(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;