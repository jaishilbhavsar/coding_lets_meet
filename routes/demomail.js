var express = require('express');
var router = express.Router();
var demo = require('../models/demo');


router.post('/', function (req, res, next) {

    demo.sendMail(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            //res.json(rows);
            return res.json({
                success: true,
                msg: 'sent'
            });
        }
    })
});

module.exports=router;