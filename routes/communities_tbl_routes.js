var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var community = require('../models/communities_model');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {
        community.getCommunityById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        community.getAlCommunities(function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

/*router.post('/',function(req,res,next){

    community.addCommunity(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
});*/

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/communities')
    },
    filename: (req, file, cb) => {
        cb(null, 'community' + '-' + Date.now() + path.extname(file.originalname))
    }
});
var upload = multer({
    storage: storage
});

router.post('/', upload.single('image'), function (req, res, next) {

    console.log(req.body);
    console.log(req.file.filename);

    community.addCommunity(req.body, req.file.filename, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    })
});

router.put('/:id', function (req, res, next) {

    community.updateCommunity(req.params.id, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.delete('/:id', function (req, res, next) {

    community.deleteCommunity(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;