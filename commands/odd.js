var _ = require('underscore');
var cli = require('commander');

cli
    .command('odd <list>')
    .description('returns only the odd values in the list')
    .action(function (list) {
        list = list.split(',');

        console.log(list);
        console.log(_.filter(list, function (num) {
            return num % 2 === 1;
        }));
    });
