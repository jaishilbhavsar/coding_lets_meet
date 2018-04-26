var db=require('../dbconnection');

var followerer_user={
    getUserById: function (id, callback) {
        return db.query("select * from user_tbl u,follower_tbl f where u.user_id=f.fk_us_id and f.fk_user_id=?", [id], callback) ;
    },
    getfollowwhom :function(id,callback)
    {
        return db.query("select * from user_tbl u,follower_tbl f where u.user_id=f.fk_user_id and f.fk_us_id=?", [id], callback) ;
    }
}
module.exports=followerer_user;