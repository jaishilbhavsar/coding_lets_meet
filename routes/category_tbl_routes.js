var express = require('express');
var router = express.Router();
var category = require('../models/category_model');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {

        category.getCategoryById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        category.getAllCategories(function (err, rows) {

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

    category.insertCategory(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});

router.delete('/:id', function (req, res, next) {

    category.deleteCategory(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });


});

router.put('/:id', function (req, res, next) {

    category.updateCategory(req.params.id, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});

module.exports = router;