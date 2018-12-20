
const ApiGwService = require("moleculer-web");

module.exports = {
    name: "users",
    actions: {
        // Shorthand definition, only the handler function
        get(ctx) {
            return  JSON.stringify(ctx.params.a) + Number(ctx.params.b);
        },

        // Normal definition with other properties. In this case
        // the `handler` function is required!
        mult: {
            cache: false,
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx) {
                // The action properties are accessible as `ctx.action.*`
                if (!ctx.action.cache)
                    return Number(ctx.params.a) * Number(ctx.params.b);
            }
        },
  /*       events: {
            // Subscribe to `user.created` event
            "user.created"(ctx) {
                console.log("User created:", ctx);
            },
 // Subscribe to all `user` events
 "user.*"(ctx) {
    console.log("User event:", ctx);
    } } */
}};