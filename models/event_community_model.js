var db = require('../dbconnection');

var event_community = {

    getUPCEventsAndCommunity: function (callback) {
        return db.query("select e.*,c.* from event_tbl e,communities_tbl c where e.fk_comm_id=c.comm_id and event_date > CURDATE()", callback);
    },
    getCommunityByEventId: function (id, callback) {
        return db.query("select e.*,c.* from event_tbl e,communities_tbl c where e.event_id=?  and e.fk_comm_id=c.comm_id", [id], callback);
    },
    getEventsByCommunityId: function (id, callback) {
        return db.query("select e.*,c.* from event_tbl e,communities_tbl c where c.comm_id=? and c.comm_id=e.fk_comm_id", [id], callback);
    }
};

module.exports = event_community;