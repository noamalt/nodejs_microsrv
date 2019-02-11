"use strict";
const ApiGwService = require("moleculer-web");

const request = require('request');



	

module.exports = {
    name: "phonevalidator",
    actions: {
         // Shorthand definition, only the handler function
         validate(ctx) {
            request('https://apilayer.net/api/validate?access_key=087bec0f39c706615138adb2662b8421&number='+ ctx.params.number +'&country_code=' + ctx.params.countrycode +'&format=1',
             { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});
        }
           ,
            handler(ctx) {
                // The action properties are accessible as `ctx.action.*`
                if (!ctx.action.cache)
                    return Number(ctx.params.a) * Number(ctx.params.b);
            }
        }
    };
