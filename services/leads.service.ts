"use strict";

const DbService = require("moleculer-db");
const MongoAdapter = require("moleculer-db-adapter-mongo");

module.exports = {
    name: "leads",
    mixins: [DbService],
    adapter: new MongoAdapter("mongodb://localhost/nodemicro_srvDB"),
    collection: "leads",
    events: {
        "leads.create"(lead){
           
        
                broker.broadcast("leads.create", {lead},"api");
                console.log(lead);
            }
        }
    }


