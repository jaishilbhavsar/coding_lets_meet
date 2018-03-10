var db = require("../dbconnection");

var category = {

    getAllCategories: function (callback) {
        return db.query("select * from category_tbl", callback);
    },
    getCategoryById: function (id, callback) {
        return db.query("select * from category_tbl where cat_id=?", [id], callback);
    },
    insertCategory: function (cat, callback) {
        return db.query("insert into category_tbl values(?,?)", [null, cat.cat_name], callback);
    },
    updateCategory: function (id, cat, callback) {
        return db.query("update category_tbl set cat_name=? where cat_id=?", [cat.cat_name, id], callback);
    },
    deleteCategory: function (id, callback) {
        return db.query("delete from category_tbl where cat_id=?", [id], callback);
    }
};

module.exports = category;