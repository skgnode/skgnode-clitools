var _ = require('underscore');
var cli = require('commander');

cli
    .command('size <list>')
    .description('returns the size of the list')
    .action(function (list) {
        list = list.split(',');

        console.log(list);
        console.log(_.size(list));
    });
