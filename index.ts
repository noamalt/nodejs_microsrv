let { ServiceBroker } = require("moleculer");
let ApiService = require("moleculer-web");

let broker = new ServiceBroker({ logger: console,
    nodeID: "server-1",
    transporter: "amqp://localhost:5672",
   // transporter: "redis://localhost:6379"
   cacher: "redis://localhost:6379"
});


/* broker.createService({
    name: "math",
    actions: {
        add(ctx) {services
           
            return  JSON.stringify(Number(ctx.params.a) + Number(ctx.params.b));
        },
        substruct(ctx)
        {
            return JSON.stringify( Number(ctx.params.a) - Number(ctx.params.b));
        }

    },
   
},

); 


broker.start();
 */



 
// Load API Gateway
broker.createService(ApiService);
broker.loadServices(folder = "./services", fileMask = "**/*.service.ts");
// Start server
broker.start();
//test
// Switch to REPL mode
broker.repl();
