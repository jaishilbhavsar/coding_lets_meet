var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var events = require('../models/event_model');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {
        events.getEventById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        events.getAllEvent(function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

/*router.post('/',function(req,res,next){

    events.addEvent(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    })
});*/

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/events')
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

router.post('/', upload.single('image'), (req, res, next) => {
    console.log(req.body);
    console.log(req.file.filename);

    events.addEvent(req.body, req.file.filename, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
})


router.put('/', upload.single('image'), function (req, res, next) {

    console.log(req.body);
    events.updateEvent(req.body, req.file.filename, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.delete('/:id', function (req, res, next) {

    events.deleteEvent(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;