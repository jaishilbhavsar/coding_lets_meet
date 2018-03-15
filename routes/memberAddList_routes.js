var express = require('express');
var router = express.Router();
var comm_member = require('../models/comm_member_model');

router.get('/:comm_id&:user_id', function (req, res, next) {

    
        comm_member.getOtherMembers(req.params.comm_id, req.params.user_id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    
});

/*router.post('/', function (req, res, next) {
    comm_member.getOtherMembers(req.body, function (err, rows) {
        //console.log(req.body);

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
            console.log(req.body);
        }
    });
});*/

module.exports = router;