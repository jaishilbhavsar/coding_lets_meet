var express = require('express');
var router = express.Router();
var all_story = require('../models/story_model');

router.get('/:id', function (req, res, next) {

    all_story.getAllStories(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;