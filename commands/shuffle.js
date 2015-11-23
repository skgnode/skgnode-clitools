var _ = require('underscore');
var cli = require('commander');

cli
    .command('shuffle <list>')
    .description('returns the list shuffled')
    .action(function (list) {
        list = list.split(',');

        console.log(list);
        console.log(_.shuffle(list));
    });
