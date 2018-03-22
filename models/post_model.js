var db = require('../dbconnection');
var fs = require('fs');
//var img=require('../public/images/posts/')
var post = {

    getAllPosts: function (callback) {
        return db.query("select * from post_tbl", callback);
    },
    getPostById: function (id, callback) {
        return db.query("select * from post_tbl where post_id=?", [id], callback);
    },
    addPost: function (ps, filename, callback) {
        return db.query("insert into post_tbl values(?,?,?,?,CURRENT_DATE,?,?)", [null, ps.post_title, ps.post_des, filename, ps.post_fk_user_id, ps.fk_comm_id], callback);
    },
    updatePost: function (ps, filename, callback) {
        var post = db.query("select * from post_tbl where post_id=?", [ps.post_id]);
        post.on('result', function (row) {
            console.log(row.post_pic);
            if (row.post_pic != '') {
                var path = 'public/images/posts/' + row.post_pic;
                console.log(path);
                fs.unlink(path, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log('Deleted successfuly');
                });
            }
        });
        return db.query("update post_tbl set post_title=?,post_des=?,post_pic=? where post_id=?", [ps.post_title, ps.post_des, filename, ps.post_id], callback);
    },
    updatePostOnly: function (ps, callback) {
        return db.query("update post_tbl set post_title=?,post_des=? where post_id=?", [ps.post_title, ps.post_des, ps.post_id], callback);
    },
    deletePost: function (post, callback) {
        console.log(post);
        console.log(post.post_pic);
        if (post.post_pic != '') {
            var path = 'public/images/posts/' + post.post_pic;
            console.log(path);
            fs.unlink(path, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("Deleted");
            });
        }
        return db.query("delete from post_tbl where post_id=?", [post.post_id], callback);
    },
    getPostAndUser: function (id, callback) {
        return db.query("select p.*,u.* from post_tbl p,user_tbl u where p.post_fk_user_id=u.user_id and p.post_id=?", [id], callback);
    }
};

module.exports = post;