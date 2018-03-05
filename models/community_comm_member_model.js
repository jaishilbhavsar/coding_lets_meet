var db = require('../dbconnection');

var community_commMember = {

    getAllCommunityAndMembers(callback) {

        return db.query("select cm.*,co.* from comm_member_tbl cm,communities_tbl co where co.comm_id=cm.fk_comm_id", callback);
    },

    getAllMembersByCommunityId(id, callback) {
        return db.query("select cm.*,co.* from comm_member_tbl cm,communities_tbl co where co.comm_id=cm.fk_comm_id  and co.comm_id=?", [id], callback);
    },

    getUsersByCommunityId(id, callback) {
        return db.query("select cm.fk_user_id,u.user_pic,u.user_name from user_tbl u,comm_member_tbl cm,communities_tbl co where co.comm_id=cm.fk_comm_id and u.user_id=cm.fk_user_id and co.comm_id=?", [id], callback)
    }
}
module.exports = community_commMember;