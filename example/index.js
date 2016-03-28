"use strict";

const gitModuleInstaller = require("../lib");

gitModuleInstaller([
    "IonicaBizau/git-stats"
  , "IonicaBizau/node-cobol"
], {
    dest: `${__dirname}/clones`
  , showOutput: true
}, (err, data) => {
    console.log("Done.");
});
