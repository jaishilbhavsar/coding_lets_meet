var db = require('../dbconnection');

var comment = {

    getAllComments: function (callback) {
        return db.query("select * from comment_tbl", callback);
    },
    getCommentById: function (id, callback) {
        return db.query("select * from comment_tbl where com_id=?", [id], callback);
    },
    addComment: function (cm, callback) {
        return db.query("insert into comment_tbl (com_date,com_des,fk_post,id,com_fk_user_id) values(?,?,?,?)", [cm.com_date, cm.com_des, cm.fk_post_id, cm.com_fk_user_id], callback);
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