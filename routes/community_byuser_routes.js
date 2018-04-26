var express = require('express');
var router = express.Router();
var commbyuser = require('../models/community_byuser');

router.get('/:id?', function (req, res, net) {
  
    if(req.params.id)
    {
        commbyuser.getuser(req.params.id,function (err, rows) {
        if (err) {
      res.json(err);
    } else {

      res.json(rows);
    }
  });
}
});
module.exports = router;