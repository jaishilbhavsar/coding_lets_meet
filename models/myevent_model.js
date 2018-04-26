var db = require('../dbconnection');

var eventsofadmin = {
    getevents: function (id, callback) {
        return db.query("select * from event_tbl where fk_user_id=?",[id],callback);

    }
}
module.exports = eventsofadmin;