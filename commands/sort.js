var _ = require('underscore');
var cli = require('commander');

cli
    .command('sort <list>')
    .description('returns the list sorted')
    .option("--direction [direction]", "Which order to sort by [asc | desc]")
    .action(function (list, options) {
        list = list.split(',');

        console.log(list);
        if (options.direction !== 'desc') {
            console.log(_.sortBy(list));
        } else {
            console.log(_.sortBy(list).reverse());
        }
    });
