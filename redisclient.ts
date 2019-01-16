
let { ServiceBroker } = require("moleculer");

/* const broker = new ServiceBroker({
    nodeID: "server-1",
    transporter: "redis://redis.server:6379"
});
// Connect with default settings
const broker = new ServiceBroker({
    transporter: "Redis"
}); */

// Connect with connection string
const broker = new ServiceBroker({
    transporter: "redis://localhost:6379"
});
/* 
// Connect with options
const broker = new ServiceBroker({
    transporter: {
        type: "Redis",
        options: {
            host: "redis-server",
            db: 0
        }
    }
}); */