var db=require('../dbconnection');

var feedback={

    getAllFeedback:function(callback){
        return db.query("select * from feedback_tbl",callback);
    },
    getFeedbackById:function(id,callback){
        return db.query("select * from feedback_tbl where feed_id=?",[id],callback);
    },
    addFeedback:function(f,callback){
        return db.query("insert into feedback_tbl (feed_des,fk_event_id,fk_user_id) values(?,?,?)",[f.feed_des,f.fk_event_id,f.fk_user_id],callback);
    },
    updateFeedback:function(id,f,callback){
        return db.query("update feedback_tbl set feed_des=?,fk_event_id=?,fk_user_id=? where feed_id=?",[f.feed_des,f.fk_event_id,f.fk_user_id,id],callback);
    },
    deleteFeedback:function(id,callback){
        return db.query("delete from feedback_tbl where feed_id=?",[id],callback);
    }
};

module.exports=feedback;