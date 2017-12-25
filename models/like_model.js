var db=require('../dbconnection');

var like={

    getAllLikes:function(callback){
        return db.query("select * from like_tbl",callback);
    },
    getLikesById:function(id,callback){
        return db.query("select * from like_tbl where like_id=?",[id],callback);
    },
    addLike:function(lk,callback){
        console.log(lk.fk_post_id);
        console.log(lk.fk_user_id);
        return db.query("insert into like_tbl values(?,?,?)",[null,lk.fk_post_id,lk.fk_user_id],callback);
    },
    updateLike:function(id,lk,callback){
        return db.query("update like_tbl set fk_post_id=?,fk_user_id=? where like_id=?",[lk.fk_post_id,lk.fk_user_id,id],callback);
    },
    deleteLike:function(id,callback){
        return db.query("delete from like_tbl where like_id=?",[id],callback);
    }
};

module.exports=like;