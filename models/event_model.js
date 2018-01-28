var db = require('../dbconnection');

var Event = {

    getAllEvent: function (callback) {
        return db.query("select * from event_tbl", callback);
    },
    getUpcomingEvents: function (callback) {
        return db.query("select * from event_tbl where event_date > CURDATE()", callback);
    },
    getEventById: function (id, callback) {

        return db.query("select * from event_tbl where event_id=?", [id], callback);
    },
    addEvent: function (e, callback) {
        return db.query("insert into event_tbl values(?,?,?,?,?,?,?,?,?,?,?)", [null, e.event_name, e.event_des, e.event_pic, e.event_s_time, e.event_e_time, e.event_date, e.event_loc, e.fk_user_id, e.fk_comm_id, e.verify], callback);
        //return db.query("insert into event_tbl (event_name,event_des,event_pic,event_s_time,event_e_time,event_date,event_loc,fk_user_id,fk_comm_id,verify) values(?,?,?,?,?,?,?,?,?,?)",[e.event_name,e.event_des,e.event_pic,e.event_s_time,e.event_e_time,e.event_date,e.event_loc,e.fk_user_id,e.fk_comm_id],callback);
    },
    deleteEvent: function (id, callback) {
        return db.query("delete from event_tbl where event_id=?", [id], callback);
    },
    updateEvent: function (id, e, callback) {
        return db.query("update event_tbl set event_name=?,event_des=?,event_pic=?,event_s_time=?,event_e_time=?,event_date=?,event_loc=? where event_id=?", [e.event_name, e.event_des, e.event_pic, e.event_s_time, e.event_e_time, e.event_date, e.event_loc, e.fk_user_id, e.fk_comm_id, id], callback);
    },
    eventRegisteredRsvp: function (user_id, callback) {
        //SELECT DISTINCT e.*,r.*,c.* from event_tbl e,rsvp_tbl r,communities_tbl c WHERE c.comm_id=e.fk_comm_id AND e.event_id=r.fk_event_id and NOT r.rsvp_fk_user_id='zeel91297@gmail.com'
        return db.query("select e.*,r.*,c.* from event_tbl e,rsvp_tbl r,communities_tbl c where r.fk_event_id=e.event_id and c.comm_id=e.fk_comm_id and r.rsvp_fk_user_id=? and e.event_date > CURDATE() ", [user_id], callback);
    },
    getAllUpcNotReg: function (user_id, callback) {
        return db.query("SELECT e.*,r.*,c.* from event_tbl e,rsvp_tbl r,communities_tbl c where e.event_id=r.fk_event_id AND e.fk_comm_id=c.comm_id AND r.rsvp_fk_user_id!=?", [user_id], callback);
    }

};
module.exports = Event;