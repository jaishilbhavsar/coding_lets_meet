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
<<<<<<< HEAD
router.post('/',function(req,res,next){
=======

<<<<<<< HEAD
=======
>>>>>>> e3c9341ad926d1f8f9f11c494372d8a10a1c1386

router.post('/',function(req,res,next){
>>>>>>> 67c2407a977c91b8c495ce978d89e847d8a2c743

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


router.put('/:id', function (req, res, next) {

    users.updateUser(req.params.id, req.body, function (err, rows) {

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