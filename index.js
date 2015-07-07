"use strict";

/**
 * Returns the full path to the current directory.
 *
 * @return {String} The path to the directory.
 */
function currentDir() {
    return process.cwd();
}

module.exports = currentDir;
