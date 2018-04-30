var db = require('../dbconnection');
var fs = require('fs');
var allcounts = {
    eventCount: function (callback) {
        return db.query("select COUNT(*) from event_tbl", callback);
    },
    commuinityCount: function (callback) {
        return db.query("select COUNT(*) from communities_tbl", callback);
    },
    userCount:function(callback)
    {
        return db.query("select COUNT(*) from user_tbl", callback);
    }

}
module.exports = allcounts;