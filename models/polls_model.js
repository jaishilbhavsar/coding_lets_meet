var db=require('../dbconnection');

var polls={

    getAllPolls:function(callback){
        return db.query("select * from polls_tbl",callback);
    },
    getPollsById:function(id,callback){
        return db.query("select * from polls_tbl where poll_id=?",[id],callback);
    },
    addPolls:function(pol,callback){
        return db.query("insert into polls_tbl (poll_title,option_1,option2,option_3,option4,fk_user_id,fk_comm_id) values(?,?)",[pol.poll_title,pol.option_1,pol.option_2,pol.option_3,pol.option_4,pol.fk_user_id,pol.fk_comm_id],callback);
    },
    updatePolls:function(id,pol,callback){
        return db.query("update polls_tbl set poll_title=?,option_1=?,option_2=?,option_3,option_4=?,fk_user_id=?,fk_comm_id=? where poll_id=?",[pol.poll_title,pol.option_1,pol.option_2,pol.option_3,pol.option_4,pol.fk_user_id,pol.fk_comm_idid],callback);
    },
    deletePolls:function(id,callback){
        return db.query("delete from polls_tbl where poll_id=?",[id],callback);
    }
};

module.exports=polls;