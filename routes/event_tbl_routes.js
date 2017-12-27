var express=require('express');
var router=express.Router();
var events=require('../models/event_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        events.getEventById(req.params.id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        events.getAllEvent(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});

router.post('/',function(req,res,next){

    events.addEvent(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    })
});


router.put('/:id',function(req,res,next){

    events.updateEvent(req.params.id,req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

router.delete('/:id',function(req,res,next){

    events.deleteEvent(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;