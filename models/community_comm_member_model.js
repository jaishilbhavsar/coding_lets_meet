var db=require('../dbconnection');

var community_commMember={

    getAllCommunityAndMembers(callback){

        return db.query("select cm.*,co.* from comm_member_tbl cm,communities_tbl co where co.comm_id=cm.fk_comm_id",callback);
    },

    getAllMembersByCommunityId(id,callback){
        return db.query("select cm.*,co.*,count(*) as count from comm_member_tbl cm,communities_tbl co where co.comm_id=cm.fk_comm_id  and co.comm_id=?",[id],callback);
    },
}
module.exports=community_commMember;