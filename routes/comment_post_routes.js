var express = require('express');
var router = express.Router();
var comm_post = require('../models/comment_model');

router.get('/:id', function (req, res, next) {

    comm_post.getCommentsByPost(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;