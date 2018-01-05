var express=require('express');
var router=express.Router();
var comm_member=require('../models/comm_member_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        comm_member.getMemberByCommunityId(req.params.id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        comm_member.getAllMembers(function(err,rows){

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

    comm_member.addCommunityMember(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
});


router.put('/:id',function(req,res,next){

    comm_member.updateCommunityMember(req.params.id,req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){

    comm_member.deleteCommunityMember(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;