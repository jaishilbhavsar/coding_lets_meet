var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var users = require('../models/user_model');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {
        users.getUserById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        users.getAllUsers(function (err, rows) {

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
        cb(null, 'public/images/users')
    },
    filename: (req, file, cb) => {
        console.log(file.fieldname);
        console.log(Date.now());
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
var upload = multer({
    storage: storage
});

router.post('/', upload.single('image'), function (req, res, next) {
    console.log(req.body);
    console.log(req.file.filename);
    users.addUser(req.body, req.file.filename, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    })
});


router.put('/', function (req, res, next) {

    users.updateUser(req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.delete('/:id', function (req, res, next) {

    users.deleteUser(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;