var express = require('express');
var router = express.Router();
var rsvp = require('../models/rsvp_model');

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
    rsvp.getRSVPOfUserAndEvent(req.body, function (err, rows) {
        console.log(req.body);

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});


module.exports = router;