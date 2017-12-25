var express=require('express');
var router=express.Router();
var posts=require('../models/post_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        posts.getPostById(req.params.id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        posts.getAllPosts(function(err,rows){

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

    posts.addPost(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
});

router.put('/:id',function(req,res,next){

    posts.updatePost(req.params.id,req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){

    posts.deletePost(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;