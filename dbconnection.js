var mysql=require('mysql');
var connection=mysql.createPool({

    host:'localhost',
    user:'root',
    password:'',
    database:'lets_meet'

});

module.exports=connection;