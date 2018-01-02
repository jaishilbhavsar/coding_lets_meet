var express = require('express');
var router = express.Router();
var comm_post = require('../models/communities_model');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {

        comm_post.getPostsByCommunityId(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        comm_post.getPostsByCommunity(function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

module.exports = router;