var express = require('express');
var router = express.Router();
var foll = require('../models/insert_follow_model');

router.post('/', function (req, res, net) {
  foll.deletefollower(req.body, function (err, rows) {
    if (err) 
    {
      res.json(err);
    } 
    else {
      res.json(rows);
    }
  });
});
module.exports = router;