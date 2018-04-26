var express = require('express');
var router = express.Router();
var f = require('../models/iffollowing_model');

router.post('/', function (req, res, net) {
  f.check(req.body, function (err, rows) {
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