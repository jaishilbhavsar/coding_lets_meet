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
>>>>>>> 89c4be3617367478e38a6624ccff57778b2f8ed9
};
module.exports = u;