var express = require('express');
var router = express.Router();
var follow_user = require('../models/follower_user_model');

router.get('/:id', function (req, res, next) {

    if (req.params.id) {
        follow_user.getfollowwhom(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});
module.exports = router;
