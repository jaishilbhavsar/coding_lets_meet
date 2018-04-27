var db = require('../dbconnection');
var foll={
insertfollower:function(f,callback)
{
    return db.query("insert into follower_tbl(fk_user_id,fk_us_id) values(?,?)", [f.fk_user_id,f.fk_us_id], callback);
},
deletefollower:function(f,callback)
{
    return db.query("delete from follower_tbl where fk_user_id=? and fk_us_id=?", [f.fk_user_id,f.fk_us_id], callback);
}

};
module.exports=foll;