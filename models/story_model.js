var db = require('../dbconnection');

var Story = {

    getAllStories: function (id,callback) {
        //return db.query("select * from story_tbl s,user_tbl u where s.fk_user_id=u.user_id ", callback);
        return db.query("SELECT * FROM story_tbl s,user_tbl u where s.fk_user_id=u.user_id and s.fk_user_id NOT IN (?)",[id],callback);
    },
    getStoryById: function (id, callback) {

        return db.query("select * from story_tbl s,user_tbl u where s.fk_user_id=u.user_id and s.fk_user_id=?", [id], callback);
    },
    addStory: function (s, callback) {
        return db.query("insert into story_tbl values(?,?,?,?,?)", [s.story_id,s.story_pic,s.story_title,s.story_time,s.fk_user_id],callback);
    },
    deleteStory: function (id, callback) {
        return db.query("delete from story_tbl where story_id=?", [id],callback);
    },
    updateStory: function (id, s, callback) {
        return db.query("update story_tbl set story_pic=?,story_title=?,story_time=?,fk_user_id=? where story_id=?", [s.story_pic,s.story_title,s.story_time,s.fk_user_id, id],callback);
    }

};
module.exports = Story;


