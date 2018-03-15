var express = require('express');
var router = express.Router();
var likes = require('../models/like_model');

router.get('/:id', function (req, res, next) {

    likes.getLikesByPostId(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res, next) {
    likes.checkLike(req.body, function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});


module.exports = router;