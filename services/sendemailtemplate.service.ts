"use strict";
const ApiGwService = require("moleculer-web");
const mailservice=require("moleculer-mail");

module.exports = {
    name: "sendmailtemplate",
    settings: {
        mixins: [mailservice],
        transport: {
            service: 'gmail',
            auth: {
                user: 'noam.altarovici@gmail.com',
                pass: 'baba3232'
            }

        },
        templateFolder: "../email-templates",

//         // Global data for templates
         data: {
            siteName: "My app"
        }
    }
    

} 

// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// async function main(){

//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   //let account = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'eivux5fltts7log4@ethereal.email',
//         pass: 'sB3vgrM8zNM5EYEJgr'
//     }
// });

  // setup email data with unicode symbols
/*   let mailOptions = {
    from: '"Fred Foo 👻" <noam.altarovici@gmail.com>', // sender address
    to: "noam.altarovici@gmail.com, noama@ice-tech.co", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "test mail Noam", // plain text body
    html: "<h1>Working</h1>" // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error); */