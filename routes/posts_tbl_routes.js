var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var posts = require('../models/post_model');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {
        posts.getPostById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        posts.getAllPosts(function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/posts')
    },
    filename: (req, file, cb) => {
        cb(null, 'post' + '-' + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({
    storage: storage
});

router.post('/', upload.single('image'), (req, res, next) => {
    posts.addPost(req.body, req.file.filename, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.put('/', function (req, res, next) {

    posts.updatePost(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

/*router.delete('/', function (req, res, next) {

    posts.deletePost(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});*/

module.exports = router;