var db = require('../dbconnection');

var communitybyuserid = {
    getuser: function (id, callback) {
        console.log("select c.* from communities_tbl c,user_tbl u,comm_member_tbl cm where u.user_id=cm.fk_user_id and cm.fk_comm_id=c.comm_id and u.user_id=?",id);
        return db.query("select c.* from communities_tbl c,user_tbl u,comm_member_tbl cm where u.user_id=cm.fk_user_id and cm.fk_comm_id=c.comm_id and u.user_id=?",[id],callback);

    }
}
module.exports = communitybyuserid;