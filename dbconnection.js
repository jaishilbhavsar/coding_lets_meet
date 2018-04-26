var mysql = require('mysql');
// var connection=mysql.createPool({

//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'lets_meet'

// });

var connection = mysql.createPool({
    host:'letsusmeet.db.9462939.e5b.hostedresource.net',
    user:'letsusmeet',
    password:'Zeel@1234',
    database:'letsusmeet'
});

module.exports = connection;