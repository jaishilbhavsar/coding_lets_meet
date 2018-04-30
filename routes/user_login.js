var express = require('express');
var router = express.Router();
var user = require('../models/user_model');

router.post('/', function (req, res, next) {
  user.getUser(req.body, function (err, rows) {
    console.log(req.body);
    if (err) {
      res.json(err);
      alert('not valid');
    } else {

      alert('valid');
      res.json(rows);
    }
  });
});

module.exports = router;