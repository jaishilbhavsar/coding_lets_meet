var express=require('express');
var router=express.Router();
var community=require('../models/communities_model');

router.get('/',function(req,res,next){

        community.getTopCommunity(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
    
    });
});

module.exports=router