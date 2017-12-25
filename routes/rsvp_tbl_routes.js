var express=require('express');
var router=express.Router();
var rsvps=require('../models/rsvp_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        rsvps.getRSVPyById(req.params.id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        rsvps.getAllRSVP(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});

router.post('/',function(req, res, next){

    rsvps.insertRSVP(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
});


router.put('/:id',function(req,res,next){

    rsvps.updateRSVP(req.params.id,req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){

    rsvps.deleteRSVP(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;