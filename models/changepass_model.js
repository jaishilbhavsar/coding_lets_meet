var db = require('../dbconnection');

var changepassword = {
    changepass: function (u, callback) {
        console.log("update user_tbl set user_pass=? where user_id=?", [u.user_pass, u.user_id]);
        return db.query("update user_tbl set user_pass=? where user_id=?", [u.user_pass, u.user_id], callback);

    }
}
module.exports = changepassword;