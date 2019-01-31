"use strict";

const { ServiceBroker } = require("moleculer");
const DbService = require("moleculer-db");

const broker = new ServiceBroker();

// Create a DB service for `user` entities
broker.createService({
    name: "leads",

    // Mixin DB service into (current) 'users' service
    mixins: [DbService],

    settings: {
        fields: ["_leadid", "firstname", "lastname","email","phone","countryid"]
    },

    afterConnected() {
        // Seed the DB with ˙this.create`
    }
});

broker.start()

// Create a new user
.then(() => broker.call("leads.create", {
    firstname: "Noam",
    lastname: "test",
    email:"noamtest@yopmail.com",
phone:"0546889419",
countryid:2,
    status: 1
}))

// Get all users
.then(() => broker.call("leads.find").then(console.log));

// List users with pagination
.then(() => broker.call("leads.list", { page: 2, pageSize: 20 }).then(console.log));

// Get a user
.then(() => broker.call("leads.get", { id: 2 }).then(console.log));

// Update a user
.then(() => broker.call("leads.update", { id: 2, name: "Jane Doe" }).then(console.log));

// Delete a user
.then(() => broker.call("leads.remove", { id: 2 }).then(console.log));