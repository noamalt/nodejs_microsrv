"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
    name: "api",
    actions: {
        GetUsers(ctx) {
            return JSON.stringify( ctx.params.name,ctx.params.id);
        }
    }
	
  
};