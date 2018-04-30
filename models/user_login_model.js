/* var db = require('../dbconnection');
var u = {
    getUser: function (us, callback) {
        console.log("hello");
        console.log(us.user_id);
        console.log(us.user_pass);
        return db.query("select * from user_tbl where user_id=? and user_pass=? and token=?", [us.user_id, us.user_pass, us.token], callback);
    }
}; */
var db = require('../dbconnection');
var u = {
    getUser: function (us, callback) {

        console.log("hello");
        console.log(us.user_id);
        console.log(us.user_pass);
        console.log(us.token);
        return db.query("select * from user_tbl where user_id=? and user_pass=? and token=?", [us.user_id, us.user_pass, us.token], callback);

    }
};
module.exports = u;