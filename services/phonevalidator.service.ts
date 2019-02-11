"use strict";
// const ApiGwService = require("moleculer-web");

const request = require('request'); 

let accesskey="087bec0f39c706615138adb2662b8421";

	

module.exports = {
    name: "phonevalidator",
    actions: {
         // Shorthand definition, only the handler function
         validate(ctx) {
            request('http://apilayer.net/api/validate?access_key='+ accesskey +'&number='+ ctx.params.number + '&country_code=' + ctx.params.countrycode +'&format=1',
             { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(res.body);
  return res.body;
});
        }
       
        }
    };
