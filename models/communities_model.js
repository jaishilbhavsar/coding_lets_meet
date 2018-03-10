var db = require('../dbconnection');

var community = {

    getAlCommunities: function (callback) {
        return db.query("select * from communities_tbl comm,user_tbl u where comm.created_by=u.user_id", callback);
    },
    getCommunityById: function (id, callback) {
        return db.query("select * from communities_tbl where comm_id=?", [id], callback);
    },
    addCommunity: function (comm, filename, callback) {
        //var cur_date = Date.now();
        //console.log(cur_date);
        console.log("hello");
        return db.query("insert into communities_tbl (comm_id,comm_name,comm_des,comm_pic,comm_date,comm_rating,created_by,comm_fk_cat_id) values(?,?,?,?,CURRENT_DATE,?,?,?)", [null, comm.comm_name, comm.comm_des, filename , 0, comm.created_by, comm.comm_fk_cat_id], callback);
    },
    updateCommunity: function (id, comm, callback) {
        return db.query("update communities_tbl set comm_name=?,comm_des=?,comm_pic=?,comm_date=?,comm_rating=? where comm_id=?", [comm.comm_name, comm.comm_des, comm.comm_pic, comm.comm_date, comm.comm_rating, id], callback);
    },
    deleteCommunity: function (id, callback) {
        return db.query("delete from communities_tbl where comm_id=?", [id], callback);
    },
    getPostsByCommunityId: function (id, callback) {
        return db.query("select c.*,p.*,u.* from communities_tbl c,post_tbl p,user_tbl u where c.comm_id=p.fk_comm_id and u.user_id=p.post_fk_user_id and c.comm_id=?", [id], callback);
    },
    getPostsByCommunity: function (callback) {
        return db.query("select c.*,p.*,u.* from communities_tbl c,post_tbl p,user_tbl u where c.comm_id=p.fk_comm_id and u.user_id=p.post_fk_user_id", callback);
    },
    getTopCommunity: function (callback) {
        return db.query("select * from communities_tbl where comm_rating>=3", callback);
    }

};

module.exports = community;