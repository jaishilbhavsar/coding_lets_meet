var db = require('../dbconnection');
var u={
check:function(f,callback)
{
    return db.query("select * from follower_tbl where fk_user_id=? and fk_us_id=?", [f.fk_user_id,f.fk_us_id], callback);
}
};
module.exports=u;