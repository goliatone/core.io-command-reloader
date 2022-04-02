/*jshint esversion:6, node:true*/
'use strict';

module.exports = {
    /**
     * Should the process continue to run as long as the files
     * are being watched? If `false` when using `fsevents` no
     * more events will be emitted after `ready` even if the
     * process continues to run.
     */
    persistence: true,
    /**
     * Defines files/paths to be ignored. The whole relative
     * or absolute path is tested, not just filename.
     * If a function with two arguments is provided, it gets
     * called twice per path - once with a single argument
     * (the path), second time with two arguments (the path
     * and the fs.Stats object of that path).
     *
     * @see https://github.com/micromatch/anymatch
     */
    ignored: undefined,
    /**
     * If set to `false` then `add`/`addDir` events are
     * also emitted for matching paths while instantiating
     * the watching as chokidar discovers these file paths
     * (before the `ready` event).
     */
    ignoreInitial: false,
    /**
     * When false, only the symlinks themselves will be
     * watched for changes instead of following the link
     * references and bubbling events through the link's
     * path.
     */
    followSymlinks: true,
    /**
     * The base directory from which watch paths are to be
     * derived. Paths emitted with events will be relative
     * to this.
     */
    cwd: undefined,
    /**
     *  If set to true then the strings passed to
     * .watch() and .add() are treated as literal path
     * names, even if they look like globs.
     */
    disableGlobbing: false,
    /**
     * If set, limits how many levels of subdirectories
     * will be traversed. Defaults to `undefined`.
     * We set it to 1 so we can get commands grouped by
     * one level of folders.
     */
    depth: 5,
    awaitForFinish: true
};