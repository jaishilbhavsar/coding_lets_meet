var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var posts = require('../models/post_model');
router.post('/', function (req, res, next) {

    //console.log(req.body);
    posts.deletePost(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;