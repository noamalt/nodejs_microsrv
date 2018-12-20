module.exports = require("./src");
broker= new ServiceBroker({ logger: console });
// Load my service
broker.createService({
    name: "twilio",
    mixins: [SmsService],
    settings: {
        phoneNumber: "972546889419"
    }
});

// Start server
broker.start().then(() => {

    broker
        .call("twilio.send", { to: "972546889419", message: "Hello Twilio!" })
        .then(sms => console.log("SMS sent. Sid:", sms.sid))
        .catch(console.error);

});