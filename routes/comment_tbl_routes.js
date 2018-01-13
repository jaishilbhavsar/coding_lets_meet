var express = require('express');
var router = express.Router();
var comments = require('../models/comment_model');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {
        comments.getCommentById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        comments.getAllComments(function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function (req, res, next) {

    comments.addComment(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    })
});


router.put('/:id', function (req, res, next) {

    comments.updateComment(req.params.id, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.delete('/:id', function (req, res, next) {

    comments.deleteComment(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;