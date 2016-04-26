# git-module-installer [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/git-module-installer.svg)](https://www.npmjs.com/package/git-module-installer) [![Downloads](https://img.shields.io/npm/dt/git-module-installer.svg)](https://www.npmjs.com/package/git-module-installer) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Clone git repositories and install their npm dependencies.

## Installation

```sh
$ npm i --save git-module-installer
```

## Example

```js
"use strict";

const gitModuleInstaller = require("git-module-installer");

gitModuleInstaller([
    "IonicaBizau/git-stats"
  , "IonicaBizau/node-cobol"
], {
    dest: `${__dirname}/clones`
  , showOutput: true
}, (err, data) => {
    console.log("Done.");
});
```

## Documentation

### `gitModuleInstaller(inputSources, options, cb)`
Installs `npm` modules from git sources.

#### Params
- **Array** `inputSources`: An array of git sources interpreted by [`git-cloner`](https://github.com/IonicaBizau/git-cloner).
- **Object** `options`: The options object interpreted by [`git-cloner`](https://github.com/IonicaBizau/git-cloner).
- **Function** `cb`: The callback function.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md