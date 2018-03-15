var express = require('express');
var router = express.Router();
var rating = require('../models/ratings_model');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {

        rating.getRatingById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        rating.getAllRating(function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });


    }

});

router.post('/', function (req, res, next) {

    rating.insertRating(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});

router.delete('/:id', function (req, res, next) {

    rating.deleteRating(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });


});

router.put('/:id', function (req, res, next) {

    rating.updateRating(req.params.id, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});

module.exports = router;