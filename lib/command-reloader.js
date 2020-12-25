'use strict';

/**
 * Should we provide this as a facility at the
 * app level?
 */
const watcher = require('chokidar');

module.exports = function(paths, options = {}) {
    return watcher.watch(paths, options);
};