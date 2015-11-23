#!/usr/bin/env node

var cli = require('commander');
var package = require('./package.json');

// CLI versioning from package.json
cli.version(package.version);

// commands
require('./commands/shuffle');
require('./commands/sort');
require('./commands/size');
require('./commands/even');
require('./commands/odd');
require('./commands/sum');

// options
require('./options/version');

// parse argv
cli.parse(process.argv);

// if no arguments where passed
if (!cli.args.length) {
    // print help
    cli.help();
}
