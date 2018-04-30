var fs = require('fs');
var db = require('../dbconnection');

var User = {

    getAllUsers: function (callback) {
        return db.query("select * from user_tbl", callback);
    },
    getUserById: function (id, callback) {
        return db.query("select * from user_tbl where user_id=?", [id], callback);
    },
    addUser: function (u, filename, callback) {
        console.log(u.user_id);
        console.log(u.user_pass);
        console.log(u.gender);
        console.log(u.user_name);
        console.log(u.user_mob_no);
        //console.log(u.user_pic);
        console.log(u.user_bdate);
        console.log(u.token);
        return db.query("insert into user_tbl(user_id,user_name,user_pass,user_pic,gender,user_mob_no,user_bdate,token) values(?,?,?,?,?,?,?,?)", [u.user_id, u.user_name, u.user_pass, filename, u.gender, u.user_mob_no, u.user_bdate, u.token], callback);
    },
    deleteUser: function (id, callback) {
        return db.query("delete from user_tbl where user_id=?", [id], callback);
    },
    updateUserOnly: function (u, callback) {
        console.log(u.user_id);
        console.log(u.user_name);
        return db.query("update user_tbl set user_name=?,gender=?,user_mob_no=?,user_bdate=?,token=? where user_id=?", [u.user_name, u.gender, u.user_mob_no, u.user_bdate, u.token, u.user_id], callback);
    },
    updateUser: function (u, filename, callback) {
        var post = db.query("select * from user_tbl where user_id=?", [u.user_id]);
        post.on('result', function (row) {
            console.log(row.user_pic);
            if (row.user_pic != '') {
                var path = 'public/images/users/' + row.user_pic;
                console.log(path);
                fs.unlink(path, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log('Deleted successfuly');
                });
            }
        });
        return db.query("update user_tbl set user_name=?,user_pic=?,gender=?,user_mob_no=?,user_bdate=?,token=? where user_id=?", [u.user_name, filename, u.gender, u.user_mob_no, u.user_bdate, u.token, u.user_id], callback);
    },
    getUser: function (us, callback) {

        console.log("hello");
        console.log(us.user_id);
        console.log(us.user_pass);
        console.log(us.token);
        return db.query("select * from user_tbl where user_id=? and user_pass=? and token=?", [us.user_id, us.user_pass, us.token], callback);

    }

};
module.exports = User;