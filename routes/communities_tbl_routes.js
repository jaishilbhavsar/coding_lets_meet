var express=require('express');
var router=express.Router();
var community=require('../models/communities_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        community.getCommunityById(req.params.id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        community.getAlCommunities(function(err,rows){

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

    community.addCommunity(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
});

router.put('/:id',function(req,res,next){

    community.updateCommunity(req.params.id,req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){

    community.deleteCommunity(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;