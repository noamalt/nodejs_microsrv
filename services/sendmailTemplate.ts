
"use strict";

const { ServiceBroker } = require("moleculer");
const broker = new ServiceBroker();

// Load service
 broker.createService(require("moleculer-mail"), {
     settings: {
        name: "sendmailtemplate",

        transport: {
			host: "smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: "367335eaa82697636",
				pass: "e5a76af9b056d0"
			}

        },
        templateFolder: "../email-templates",

//         // Global data for templates
         data: {
            siteName: "My app"
        }
    }
 }); 

// Start server
broker.start().then(() => {

	// Send a default welcome email
    broker.call("mail.send",{ 
        to: "noama@ice-tech.co", 
        // cc: "jane.doe@example.org",
        // bcc: "boss@example.org",
        subject: "Hello Friends!", 
        text: "This is a text only message!"
    })
	.then(console.log)
	.catch(console.error);

});

