var db = require('../dbconnection');
var fs = require('fs');
var Event = {

    getAllEvent: function (callback) {
        return db.query("SELECT e.*,c.*,u.* from event_tbl e,communities_tbl c,user_tbl u WHERE e.fk_user_id=u.user_id and e.event_verify='true' and c.comm_id=e.fk_comm_id", callback);
    },
    getUpcomingEvents: function (callback) {
        return db.query("select * from event_tbl where event_date > CURDATE() and e.event_verify='true'", callback);
    },
    getmyUpcomingEvents:function(id,callback)
    {
        return db.query("select * from event_tbl where event_date > CURDATE() and event_verify='true' and fk_user_id=?",[id], callback);        
    },
    getmyPastEvents:function(id,callback)
    {
        return db.query("select * from event_tbl where event_date < CURDATE() and event_verify='true' and fk_user_id=?",[id], callback);
    },
    getEventById: function (id, callback) {

        return db.query("select e.*,u.* from event_tbl e,user_tbl u where e.event_id=? and e.fk_user_id=u.user_id", [id], callback);
    },
    addEvent: function (e, filename, callback) {
        return db.query("insert into event_tbl values(?,?,?,?,?,?,?,?,?,?,?)", [null, e.event_name, e.event_des, filename, e.event_s_time, e.event_e_time, e.event_date, e.event_loc, e.fk_user_id, e.fk_comm_id, "false"], callback);
        //return db.query("insert into event_tbl (event_name,event_des,event_pic,event_s_time,event_e_time,event_date,event_loc,fk_user_id,fk_comm_id,verify) values(?,?,?,?,?,?,?,?,?,?)",[e.event_name,e.event_des,e.event_pic,e.event_s_time,e.event_e_time,e.event_date,e.event_loc,e.fk_user_id,e.fk_comm_id],callback);
    },
    deleteEvent: function (id, callback) {
        var evn = db.query("select * from event_tbl where event_id=?", [id]);
        evn.on('result', function (row) {
            console.log(row.event_pic);
            if (row.event_pic != '') {
                var path = 'public/images/events/' + row.event_pic;
                console.log(path);
                fs.unlink(path, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log('Deleted successfuly');
                });
            }
        });
        return db.query("delete from event_tbl where event_id=?", [id], callback);
    },
    updateEvent: function (e, filename, callback) {
        var evn = db.query("select * from event_tbl where event_id=?", [e.event_id]);
        evn.on('result', function (row) {
            console.log(row.event_pic);
            if (row.event_pic != '') {
                var path = 'public/images/events/' + row.event_pic;
                console.log(path);
                fs.unlink(path, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log('Deleted successfuly');
                });
            }
        });
        return db.query("update event_tbl set event_name=?,event_des=?,event_pic=?,event_s_time=?,event_e_time=?,event_date=?,event_loc=?,fk_comm_id=? where event_id=?", [e.event_name, e.event_des, filename, e.event_s_time, e.event_e_time, e.event_date, e.event_loc, e.fk_comm_id, e.event_idid], callback);
    },
    updateEventOnly: function (e, callback) {
        return db.query("update event_tbl set event_name=?,event_des=?,event_s_time=?,event_e_time=?,event_date=?,event_loc=?,fk_comm_id=? where event_id=?", [e.event_name, e.event_des, e.event_s_time, e.event_e_time, e.event_date, e.event_loc, e.fk_comm_id, e.event_id], callback);
    },
    eventRegisteredRsvp: function (user_id, callback) {
        //SELECT DISTINCT e.*,r.*,c.* from event_tbl e,rsvp_tbl r,communities_tbl c WHERE c.comm_id=e.fk_comm_id AND e.event_id=r.fk_event_id and NOT r.rsvp_fk_user_id='zeel91297@gmail.com'
        return db.query("select e.*,r.*,c.* from event_tbl e,rsvp_tbl r,communities_tbl c where r.fk_event_id=e.event_id and c.comm_id=e.fk_comm_id and r.rsvp_fk_user_id=? and e.event_date > CURDATE() and e.event_verify='true'", [user_id], callback);
    },
    getAllUpcNotReg: function (user_id, callback) {
        return db.query("SELECT e.*,r.*,c.* from event_tbl e,rsvp_tbl r,communities_tbl c where e.event_id=r.fk_event_id AND e.fk_comm_id=c.comm_id AND r.rsvp_fk_user_id!=? and e.event_date > CURDATE() and e.event_verify='true'", [user_id], callback);
    },
    getPastEventUser: function (user_id, callback) {
        return db.query("select e.*,r.*,c.* from event_tbl e,rsvp_tbl r,communities_tbl c where r.fk_event_id=e.event_id and c.comm_id=e.fk_comm_id and r.rsvp_fk_user_id=? and e.event_date < CURDATE() and e.event_verify='true'", [user_id], callback);
    },
    getUpcEventUser: function (user_id, callback) {
        return db.query("select e.*,r.*,c.* from event_tbl e,rsvp_tbl r,communities_tbl c where r.fk_event_id=e.event_id and c.comm_id=e.fk_comm_id and r.rsvp_fk_user_id=? and e.event_date > CURDATE() and e.event_verify='true'", [user_id], callback);
    },
    getPastEventsByCommunity: function (comm_id, callback) {
        return db.query("SELECT e.*,u.*,c.* from event_tbl e,user_tbl u,communities_tbl c WHERE e.fk_user_id=u.user_id and e.fk_comm_id=c.comm_id and c.comm_id=? and e.event_date < CURDATE() and e.event_verify='true'", [comm_id], callback);
    },
    getUpcEventsByCommunity: function (comm_id, callback) {
        return db.query("SELECT e.*,u.*,c.* from event_tbl e,user_tbl u,communities_tbl c WHERE e.fk_user_id=u.user_id and e.fk_comm_id=c.comm_id and c.comm_id=? and e.event_date > CURDATE() and e.event_verify='true'", [comm_id], callback);
    },
    getUnApprovedEvent: function (callback) {
        return db.query("SELECT e.*,u.* from event_tbl e,user_tbl u WHERE e.fk_user_id=u.user_id and e.event_verify='false' and event_date > CURDATE()", callback);
    },
    verify_event: function (event, callback) {
        return db.query("update event_tbl set event_verify='true' where event_id=? and event_verify='false'", [event.event_id], callback);
    },
    deleteAllEvents: function (event, callback) {
        var delarr = [];
        for (i = 0; i < event.length; i++) {
            delarr[i] = event[i].event_id;
            var evn = db.query("select * from event_tbl where event_id=?", delarr[i]);
            evn.on('result', function (row) {
                console.log(row.event_pic);
                if (row.event_pic != '') {
                    var path = 'public/images/events/' + row.event_pic;
                    console.log(path);
                    fs.unlink(path, function (err) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('Deleted successfuly');
                    });
                }
            });
        }
        return db.query("delete from event_tbl where event_id in (?)", [delarr], callback);
    }

};
module.exports = Event;