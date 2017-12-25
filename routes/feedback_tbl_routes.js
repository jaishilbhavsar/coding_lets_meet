var express=require('express');
var router=express.Router();
var feedbacks=require('../models/feedback_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        feedbacks.getFeedbackById(req.params.id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        feedbacks.getAllFeedback(function(err,rows){

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

    feedbacks.addFeedback(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
});


router.put('/:id',function(req,res,next){

    feedbacks.updateFeedback(req.params.id,req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){

    feedbacks.deleteFeedback(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;