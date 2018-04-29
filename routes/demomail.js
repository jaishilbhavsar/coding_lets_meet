var express = require('express');
var router = express.Router();
var demo = require('../models/demo');

router.post('/', function (req, res, next) {
    console.log(req.body);
    demo.sendingMail(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            //console.log();
            //res.json(rows);
            return res.json({
                success: true,
                msg: 'sent'
            });
        }
    })
});

module.exports = router;