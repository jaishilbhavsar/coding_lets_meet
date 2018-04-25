var express = require('express');
var router = express.Router();
var chnpass = require('../models/changepass_model');

router.post('/', function (req, res, net) {
  chnpass.changepass(req.body, function (err, rows) {
    console.log(req.body);
    if (err) {
      res.json(err);
      //alert('not valid');
    } else {

      //alert('valid');
      res.json(rows);
    }
  });
});
module.exports = router;