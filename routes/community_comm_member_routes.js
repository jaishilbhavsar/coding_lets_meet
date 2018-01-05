var express = require('express');
var router = express.Router();
var members = require('../models/community_comm_member_model');
router.get('/:id?', function (req, res, next) {

    if (req.params.id) {
        members.getAllMembersByCommunityId(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {

        members.getAllCommunityAndMembers(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});


module.exports = router;