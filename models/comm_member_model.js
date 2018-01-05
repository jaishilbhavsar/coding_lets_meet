var db = require('../dbconnection');

var comm_member = {

    getAllMembers: function (callback) {
        return db.query("select * from comm_member_tbl", callback);
    },
    getMemberByCommunityId: function (id, callback) {
        return db.query("select * from comm_member_tbl where fk_comm_id=?", [id], callback);
    },
    getMemberById: function (id, callback) {
        return db.query("select * from comm_member_tbl where join_id=?", [id], callback);
    },
    addCommunityMember: function (cmb, callback) {
        return db.query("insert into comm_member_tbl (fk_user_id,fk_comm_id) values(?,?)", [cmb.fk_user_id, cmb.fk_comm_id], callback);
    },
    updateCommunityMember: function (id, cmb, callback) {
        return db.query("update comm_member_tbl set fk_comm_id=?,fk_user_id=? where join_id=?", [cmb.fk_comm_id, cmb.fk_user_id, id], callback);
    },
    deleteCommunityMember: function (id, callback) {
        return db.query("delete from comm_member_tbl where join_id=?", [id], callback);
    },
    getCountByCommunity: function (id, callback) {
        return db.query("select count(*) as count from comm_member_tbl where fk_comm_id=?", [id], callback);
    },
    checkMembers: function (comm_mem, callback) {
        return db.query("select * from comm_member_tbl where fk_user_id=? and fk_comm_id=?", [comm_mem.fk_user_id, comm_mem.fk_comm_id], callback);
    }
};

module.exports = comm_member;