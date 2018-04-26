var express = require('express');
var router = express.Router();
var commofadmin = require('../models/mycommunity_model');

router.get('/:id?', function (req, res, net) {
  
    if(req.params.id)
    {
        commofadmin.getcommunity(req.params.id,function (err, rows) {
        if (err) {
      res.json(err);
    } else {

      res.json(rows);
    }
  });
}
});
module.exports = router;