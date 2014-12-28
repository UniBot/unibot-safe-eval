/**
 * Plugin dependencies.
 *
 * @type {exports}
 */
var Sandbox = require('sandbox');

/**
 * Safe eval plugin for UniBot.
 *
 * With this plugin UniBot IRC bot can run javascript code in own sandbox. See more at http://gf3.github.io/sandbox/
 *
 * @param   {Object} options Plugin options object, description below.
 *      db: {mongoose} the mongodb connection
 *      bot: {irc} the irc bot
 *      web: {connect} a connect + connect-rest webserver
 *      config: {Object} UniBot configuration
 *
 * @return  {Function}  Init function to access shared resources
 */
module.exports = function init(options) {
    return function plugin(channel) {
        return {
            '^~~(.+)': function command(from, matches) {
                var s = new Sandbox();

                s.run(matches[1], function(output) {
                    channel.say(from + ': ' + JSON.stringify(output));
                });
            }
        };
    };
};
