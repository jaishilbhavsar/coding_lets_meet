var email   = require("emailjs/email");
var forgetpass={

sendMail:function(demo,callback){

var server  = email.server.connect({
   user:    "letsmeet531@gmail.com", 
   password:"letsmeet", 
   host:    "smtp.gmail.com", 
   ssl:     true,
   port:465
});

server.send({
   text:    demo.message,
   from:    "letsmeet531@gmail.com", 
   to:      demo.name,
   subject: demo.subject
}, callback);
}


}
module.exports = forgetpass;
