var db = require('../dbconnection');

var comment = {

    getAllComments: function (callback) {
        return db.query("select * from comment_tbl", callback);
    },
    getCommentById: function (id, callback) {
        return db.query("select * from comment_tbl where com_id=?", [id], callback);
    },
    addComment: function (cm, callback) {
<<<<<<< HEAD
        console.log(cm);
        return db.query("insert into comment_tbl (com_id,com_date,com_des,fk_post_id,com_fk_user_id) values(?,?,?,?,?)", [null,cm.com_date, cm.com_des, cm.fk_post_id, cm.com_fk_user_id], callback);
=======
        // cm.com_date = new Date().now();
        //var mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        //var mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD');
        console.log(cm);
        //return db.query("insert into comment_tbl values(?,?,?,?,?)", [null, cm.com_date, cm.com_des, cm.fk_post_id, cm.com_fk_user_id], callback);
        return db.query("INSERT INTO comment_tbl(com_id, com_date, com_des, fk_post_id, com_fk_user_id) VALUES (?,?,?,?,?)", [null, cm.com_date, cm.com_des, cm.fk_post_id, cm.com_fk_user_id], callback);
>>>>>>> f05e50c0836f5df62d92d88d6a40f280a809c373
    },
    updateComment: function (id, cm, callback) {
        return db.query("update comment_tbl set com_date=?,com_des=? where com_id=?", [cm.com_date, cm.com_des, id], callback);
    },
    deleteComment: function (id, callback) {
        return db.query("delete from comment_tbl where com_id=?", [id], callback);
    },
    getCommentsByPost(id, callback) {
        return db.query("SELECT p.*,c.*,u.* FROM post_tbl p,comment_tbl c,user_tbl u WHERE p.post_id=c.fk_post_id and c.com_fk_user_id=u.user_id and p.post_id=?", [id], callback);
    }
};

module.exports = comment;