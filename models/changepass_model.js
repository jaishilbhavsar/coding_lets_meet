var db=require('../dbconnection');

var changepassword={
    changepass: function (u,callback) {
        return db.query("update user_tbl set user_pass=? where user_id=?",[u.password,u.userid],callback) ;
    }
}
module.exports=changepassword;