var db = require('../dbconnection');

var Event = {

    getAllEvent: function (callback) {
        return db.query("select * from event_tbl", callback);
    },
    getEventById: function (id, callback) {

        return db.query("select * from event_tbl where event_id=?", [id], callback);
    },
    addEvent: function (e, callback) {
        return db.query("insert into event_tbl values(?,?,?,?,?,?,?,?,?,?,?)",[null,e.event_name,e.event_des,e.event_pic,e.event_s_time,e.event_e_time,e.event_date,e.event_loc,e.fk_user_id,e.fk_comm_id,e.verify],callback);
        //return db.query("insert into event_tbl (event_name,event_des,event_pic,event_s_time,event_e_time,event_date,event_loc,fk_user_id,fk_comm_id,verify) values(?,?,?,?,?,?,?,?,?,?)",[e.event_name,e.event_des,e.event_pic,e.event_s_time,e.event_e_time,e.event_date,e.event_loc,e.fk_user_id,e.fk_comm_id],callback);
    },
    deleteEvent: function (id, callback) {
        return db.query("delete from event_tbl where event_id=?", [id],callback);
    },
    updateEvent: function (id, e, callback) {
        return db.query("update event_tbl set event_name=?,event_des=?,event_pic=?,event_s_time=?,event_e_time=?,event_date=?,event_loc=? where event_id=?",[e.event_name,e.event_des,e.event_pic,e.event_s_time,e.event_e_time,e.event_date,e.event_loc,e.fk_user_id,e.fk_comm_id, id],callback);
    }

};
module.exports = Event;
