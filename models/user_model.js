 //import { lchmod } from 'fs';

 var db = require('../dbconnection');

 var User = {

     getAllUsers: function (callback) {
         return db.query("select * from user_tbl", callback);
     },
     getUserById: function (id, callback) {
         return db.query("select * from user_tbl where user_id=?", [id], callback);
     },
<<<<<<< HEAD
     addUser: function (u, callback) {
=======
     addUser: function (u, filename, callback) {
>>>>>>> 0aa3c6db4e41622843d61c1233c126355dcf8066
         console.log(u.user_id);
         console.log(u.user_pass);
         console.log(u.gender);
         console.log(u.user_name);
         console.log(u.user_mob_no);
<<<<<<< HEAD
         console.log(u.user_pic);
         console.log(u.user_bdate);
         console.log(u.token);
         return db.query("insert into user_tbl(user_id,user_name,user_pass,user_pic,gender,user_mob_no,user_bdate,token) values(?,?,?,?,?,?,?,?)", [u.user_id, u.user_name, u.user_pass, u.user_pic, u.gender, u.user_mob_no, u.user_bdate, u.token], callback);
=======
         //console.log(u.user_pic);
         console.log(u.user_bdate);
         console.log(u.token);
         return db.query("insert into user_tbl(user_id,user_name,user_pass,user_pic,gender,user_mob_no,user_bdate,token) values(?,?,?,?,?,?,?,?)", [u.user_id, u.user_name, u.user_pass, filename, u.gender, u.user_mob_no, u.user_bdate,u.token], callback);
>>>>>>> 0aa3c6db4e41622843d61c1233c126355dcf8066
     },
     deleteUser: function (id, callback) {
         return db.query("delete from user_tbl where user_id=?", [id], callback);
     },
     updateUser: function (u, callback) {
         console.log(u.user_id);
         console.log(u.user_name);
<<<<<<< HEAD
     },
=======
         return db.query("update user_tbl set user_name=?,user_pic=?,gender=?,user_mob_no=?,user_bdate=?,token=? where user_id=?", [u.user_name, u.user_pic, u.gender, u.user_mob_no, u.user_bdate,u.token, u.user_id], callback);
     }

>>>>>>> 0aa3c6db4e41622843d61c1233c126355dcf8066
 };
 module.exports = User;