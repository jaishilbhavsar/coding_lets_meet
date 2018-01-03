var db=require('../dbconnection');

var follower={

    getAllFollower:function(callback){
        return db.query("select * from follower_tbl",callback);
    },
    getFollowingById:function(id,callback){
        return db.query("select * from follower_tbl where fk_us_id=?",[id],callback);
    },
    getFollowerById:function(id,callback){
        return db.query("select * from follower_tbl where fk_user_id=?",[id],callback);
    },
    addFollower:function(f,callback){
        return db.query("insert into follower_tbl (fk_user_id,fk_us_id) values(?,?)",[f.fk_user_id,f.fk_us_id],callback);
    },
    updateFollower:function(id,f,callback){
        return db.query("update follower_tbl set fk_user_id=? fk_us_id=? where follow_id=?",[f.fk_user_id,f.fk_us_id,id],callback);
    },
    deleteFollower:function(id,callback){
        return db.query("delete from follower_tbl where follow_id=?",[id],callback);
    }
};

module.exports=follower;