var db = require('../dbconnection');
<<<<<<< HEAD
var u={
getUser:function(us,callback)
{
    console.log(us.user_id);
    console.log(us.user_pass);
    return db.query("select * from user_tbl where user_id=? and user_pass=? and token=?", [us.user_id,us.user_pass,us.token], callback);
}
=======
var u = {
    getUser: function (us, callback) {
        console.log(us.user_id);
        console.log(us.user_pass);
        return db.query("select * from user_tbl where user_id=? and user_pass=? and token=?", [us.user_id, us.user_pass, us.token], callback);
    }
>>>>>>> 0aa3c6db4e41622843d61c1233c126355dcf8066
};
module.exports = u;