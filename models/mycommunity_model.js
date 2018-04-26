var db = require('../dbconnection');

var communityofadmin = {
    getcommunity: function (id, callback) {
        return db.query("select * from communities_tbl where created_by=?",[id],callback);

    }
}
module.exports = communityofadmin;