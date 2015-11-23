var _ = require('underscore');
var cli = require('commander');

cli
    .command('even <list>')
    .description('returns only the even values in the list')
    .action(function (list) {
        list = list.split(',');

        console.log(list);
        console.log(_.filter(list, function (num) {
            return num % 2 === 0;
        }));
    });
