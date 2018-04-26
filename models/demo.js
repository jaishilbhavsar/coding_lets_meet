//var email = require("emailjs/email");
var nodemailer = require('nodemailer');
var forgetpass = {
    sendingMail: function (demo, callback) {
        console.log(demo);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'letsmeet531@gmail.com',
                pass: 'letsmeet'
            }
        });

        var mailOptions = {
            from: 'letsmeet531@gmail.com',
            to: 'demo.name',
            subject: 'demo.subject',
            text: 'demo.message'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
};
/* var forgetpass = {

    sendMail: function (demo, callback) {

        var server = email.server.connect({
            user: "letsmeet531@gmail.com",
            password: "letsmeet",
            host: "smtp.gmail.com",
            ssl: true,
            port: 465
        });

        server.send({
            text: demo.message,
            from: "letsmeet531@gmail.com",
            to: demo.name,
            subject: demo.subject
        }, callback);
    }


} */

/* var forgetpass = {
    sendMail: function (demo, callback) {
        var server = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'letsmeet531@gmail.com',
                pass: 'letsmeet'
            }
        });

        var mailOptions = {
            from: 'letsmeet531@gmail.com',
            to: 'demo.name',
            subject: 'demo.subject',
            text: 'demo.message'
        };

        
    }
}; */
/* var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'letsmeet531@gmail.com',
        pass: 'letsmeet'
    }
});

var mailOptions = {
    from: 'letsmeet531@gmail.com',
    to: 'demo.name',
    subject: 'demo.subject',
    text: 'demo.message'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
}); */

module.exports = forgetpass;
//module.exports = forgetpass;