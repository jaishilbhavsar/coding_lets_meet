var db = require("../dbconnection");

var rating = {

    getAllRating: function (callback) {

        return db.query("select * from ratings_tbl", callback);

    },

    getRateCount:function(rating,id,callback){

        return db.query("select COUNT(rate_value) from ratings_tbl where rate_value=? and rate_fk_comm_id=?", [rating,id], callback);
    },

    getRatingById: function (id, callback) {

        return db.query("select * from ratings_tbl where rate_fk_comm_id=?", [id], callback);
    },

    insertRating: function (rate, callback) {

        return db.query("insert into ratings_tbl values(?,?,?,?)", [null,rate.rate_value, rate.rate_fk_comm_id, rate.rate_fk_user_id], callback);
    },

    updateRating: function (id, rate, callback) {

        return db.query("update ratings_tbl set rate_value=? where rate_fk_comm_id=?", [rate.rate_value, id], callback);
    },

    deleteRating: function (id, callback) {

        return db.query("delete from ratings_tbl where rate_id=?", [id], callback);
    },

    getAvgRating: function (id, callback) {

        return db.query("select AVG(rate_value) from ratings_tbl where rate_fk_comm_id=?", [id], callback);
    },

    getCountRating: function (id, callback) {

        return db.query("select Count(rate_value) from ratings_tbl where rate_fk_comm_id=?", [id], callback);
    }

};

module.exports = rating;