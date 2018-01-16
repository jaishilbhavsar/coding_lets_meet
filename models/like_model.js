var db = require('../dbconnection');

var like = {

    getAllLikes: function (callback) {
        return db.query("select * from like_tbl", callback);
    },
    getLikesById: function (id, callback) {
        return db.query("select * from like_tbl where like_id=?", [id], callback);
    },
    addLike: function (lk, callback) {
        return db.query("insert into like_tbl values(?,?,?)", [null, lk.like_fk_post_id, lk.like_fk_user_id], callback);
    },
    updateLike: function (id, lk, callback) {
        return db.query("update like_tbl set like_fk_post_id=?,like_fk_user_id=? where like_id=?", [lk.like_fk_post_id, lk.like_fk_user_id, id], callback);
    },
    deleteLike: function (id, callback) {
        return db.query("delete from like_tbl where like_id=?", [id], callback);
    },
    getLikesByPostId: function (id, callback) {
        return db.query("select l.*,p.*,u.* from like_tbl l,post_tbl p,user_tbl u where l.like_fk_post_id=p.post_id and l.like_fk_user_id=u.user_id and l.like_fk_post_id=?", [id], callback);
    },
    checkLike: function (lk, callback) {
        return db.query("select * from like_tbl where like_fk_post_id=? and like_fk_user_id=?", [lk.like_fk_post_id, lk.like_fk_user_id], callback);
    }
};

module.exports = like;