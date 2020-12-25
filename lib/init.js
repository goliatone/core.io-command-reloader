'use strict';
const extend = require('gextend');
const defaults = require('./defaults');
const makeCommandReloader = require('./command-reloader');
/**
 * Hot Command Reloading
 * 
 * This module enables us to modify commands locally 
 * during development and will reload the command in
 * memory so that it is executed with the latest code.
 * 
 * @param {Application} context Application core context
 * @param {Object} config Configuration object
 * @param {String} config.moduleid Set by core.io
 * @param {Object} [config.watchOptions] Chokidar config options
 */
module.exports = function(context, config) {
    const logger = context.getLogger(config.moduleid);

    if (context.environment !== 'development') {
        logger.info('Skip initalizing Hot Command Reload module...');
        return {};
    }

    context.once('modules.resolved', _ => {

        logger.info('Initialize command module reloader!');

        const watchOptions = extend({}, defaults, config.watchOptions);

        const commandReload = makeCommandReloader(context._commandspath, watchOptions);

        commandReload.on('change', (filepath, stats) => {
            logger.info('Command updated: %s', filepath);
            context.reloadCommand(filepath, requireUncached(filepath));
        });

        function requireUncached(mdl) {
            delete require.cache[require.resolve(mdl)];
            return require(mdl);
        }
    });

    return {};
};