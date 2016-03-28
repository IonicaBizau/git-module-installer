const gitCloner = require("git-cloner")
    , npmSpawn = require("spawn-npm")
    ;

/**
 * gitModuleInstaller
 * Installs `npm` modules from git sources.
 *
 * @name gitModuleInstaller
 * @function
 * @param {Array} inputSources An array of git sources interpreted by [`git-cloner`](https://github.com/IonicaBizau/git-cloner).
 * @param {Object} options The options object interpreted by [`git-cloner`](https://github.com/IonicaBizau/git-cloner).
 * @param {Function} cb The callback function.
 */
module.exports = function gitModuleInstaller(inputSources, options, cb) {

    if (typeof options === "function") {
        cb = options;
        options = ".";
    }

    if (typeof options === "string") {
        options = {
            dest: options
        };
    }

    options.done = (ins, cb) => {
        npmSpawn("install", {
            production: true
        }, {
            _showOutput: options.showOutput
          , cwd: ins.dest
        }, cb);
    };

    gitCloner(inputSources, options, cb);
};
