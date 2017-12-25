var db=require('../dbconnection');

var post={

    getAllPosts:function(callback){
        return db.query("select * from post_tbl",callback);
    },
    getPostById:function(id,callback){
        return db.query("select * from post_tbl where post_id=?",[id],callback);
    },
    addPost:function(ps,callback){
        return db.query("insert into post_tbl values(?,?,?,?,?,?)",[ps.post_title,ps.post_des,ps.post_pic,ps.post_date,ps.fk_user_id,ps.fk_comm_id],callback);
    },
    updatePost:function(id,ps,callback){
        return db.query("update post_tbl set post_title=?,post_des=?,post_pic=?,post_date=?,fk_user_id=?,fk_comm_id=? where post_id=?",[ps.post_title,ps.post_des,ps.post_pic,ps.post_date,ps.fk_user_id,ps.fk_comm_id,id],callback);
    },
    deletePost:function(id,callback){
        return db.query("delete from post_tbl where post_id=?",[id],callback);
    }
};

module.exports=post;