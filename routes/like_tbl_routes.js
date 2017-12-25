var express=require('express');
var router=express.Router();
var likes=require('../models/like_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        likes.getLikesById(req.params.id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        likes.getAllLikes(function(err,rows){

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

    console.log('inside post call route');
    likes.addLike(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
});


router.put('/:id',function(req,res,next){

    likes.updateLike(req.params.id,req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){

    likes.deleteLike(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;