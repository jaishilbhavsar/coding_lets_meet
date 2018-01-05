var db = require("../dbconnection");

var rsvp = {

    getAllRSVP: function (callback) {

        return db.query("select * from rsvp_tbl", callback);

    },

    getRSVPyById: function (id, callback) {

        return db.query("select * from rsvp_tbl where RSVP_id=?", [id], callback);
    },

    insertRSVP: function (r, callback) {

        return db.query("insert into rsvp_tbl(rsvp_fk_user_id,fk_event_id) values(?,?)", [r.rsvp_fk_user_id, r.fk_event_id], callback);
    },

    updateRSVP: function (id, r, callback) {

        return db.query("update rsvp_tbl set rsvp_fk_user_id=? fk_event_id=? where RSVP_id=?", [r.rsvp_fk_user_id, r.fk_event_id, id], callback);
    },

    deleteRSVP: function (id, callback) {
        return db.query("delete from rsvp_tbl where RSVP_id=?", [id], callback);
    },
    getRSVPByEvent: function (id, callback) {
        return db.query("select * from rsvp_tbl where fk_event_id=?", [id], callback);
    },
    getRSVPCountByEvent: function (id, callback) {
        return db.query("select count(*) as count from rsvp_tbl where fk_event_id=?", [id], callback);
    },
    // getRSVPofUserAndEvent: function (rs, callback) {
    //return db.query("select * from rsvp_tbl where fk_user_id=? and fk_event_id=?", [fk_user_id, fk_event_id], callback);
    //    return ("select RSVP_id from rsvp_tbl where fk_user_id=? and fk_event_id=?", [rs.fk_user_id, rs.fk_event_id], callback);
    //}

    getRSVPOfUserAndEvent(rs, callback) {
        console.log(rs);
        console.log(rs.fk_user_id);
        return db.query("select RSVP_id from rsvp_tbl where fk_user_id=? and fk_event_id=?", [rs.fk_user_id, rs.fk_event_id], callback);
    }

};

module.exports = rsvp;