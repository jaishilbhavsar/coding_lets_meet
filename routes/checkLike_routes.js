var express = require('express');
var router = express.Router();
var like = require('../models/like_model');

/*router.get('/:user_id&:event_id', function (req, res, next) {

        rsvp.getRSVPofUserAndEvent(req.params.user_id, req.params.event_id, function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    
};*/

router.post('/', function (req, res, next) {
    like.checkLike(req.body, function (err, rows) {
        //console.log(req.body);

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});


module.exports = router;