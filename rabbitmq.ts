
let { ServiceBroker } = require("moleculer");


// Connect to 'amqp://guest:guest@localhost:5672'
const broker = new ServiceBroker({
    transporter: "AMQP"
});

// Connect to a remote server
const broker = new ServiceBroker({
    transporter: "amqp://rabbitmq-server:5672"
});

// Connect to a remote server with options & credentials
const broker = new ServiceBroker({
    transporter: {
        type: "AMQP",
        options: {
            url: "amqp://user:pass@rabbitmq-server:5672",
            eventTimeToLive: 5000,
            prefetch: 1,
            socketOptions: {
                servername: process.env.RABBIT_SERVER_NAME
            }
            // If true, queues will be autodeleted once service is stopped, i.e., queue listener is removed
            autoDeleteQueues: true
        }
    }
});