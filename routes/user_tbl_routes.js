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

=======
<<<<<<< HEAD
=======

>>>>>>> 72d3c0b3533d93aa4bc7059012ce144975086d74
>>>>>>> f576e03cc4209d63f0be9e590ff84138f2b2e188
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