var express = require('express');
var router = express.Router();
var post_user = require('../models/post_model');

router.get('/:id', function (req, res, next) {

    post_user.getPostAndUser(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;