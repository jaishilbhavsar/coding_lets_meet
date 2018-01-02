var express = require('express');
var router = express.Router();
var users = require('../models/user_model');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {
        users.getUserById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        users.getAllUsers(function (err, rows) {

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

    users.addUser(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    })
});


router.put('/', function (req, res, next) {

    users.updateUser(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.delete('/:id', function (req, res, next) {

    users.deleteUser(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;