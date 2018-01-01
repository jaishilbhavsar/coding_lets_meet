var db = require("../dbconnection");

var rsvp = {

    getAllRSVP: function (callback) {

        return db.query("select * from rsvp_tbl", callback);

    },

    getRSVPyById: function (id, callback) {

        return db.query("select * from rsvp_tbl where RSVP_id=?", [id], callback);
    },

    insertRSVP: function (r, callback) {

        return db.query("insert into rsvp_tbl(fk_user_id,fk_event_id) values(?,?)", [r.fk_user_id, r.fk_event_id], callback);
    },

    updateRSVP: function (id, r, callback) {

        return db.query("update rsvp_tbl set fk_user_id=? fk_event_id=? where RSVP_id=?", [r.fk_user_id, r.fk_event_id, id], callback);
    },

    deleteRSVP: function (id, callback) {

        return db.query("delete from rsvp_tbl where RSVP_id=?", [id], callback);
    },
    getRSVPByEvent: function (id, callback) {
        return db.query("select * from rsvp_tbl where fk_event_id=?", [id], callback);
    },
    getRSVPCountByEvent: function (id, callback) {
        return db.query("select count(*) from rsvp_tbl where fk_event_id=?", [id], callback);
    }

};

module.exports = rsvp;