var express = require('express');
var router = express.Router();
var eventofadmin = require('../models/myevent_model');

router.get('/:id?', function (req, res, net) {
  
    if(req.params.id)
    {
        eventofadmin.getevents(req.params.id,function (err, rows) {
        if (err) {
      res.json(err);
    } else {

      res.json(rows);
    }
  });
}
});
module.exports = router;