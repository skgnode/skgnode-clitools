var cli = require('commander');

cli
    .command('sum <value> [moreValues...]')
    .description('returns the sum of the values passed')
    .action(function (value, moreValues) {
        var result = parseInt(value, 10);

        moreValues.forEach(function (value) {
        	result += parseInt(value, 10);
        });

        console.log(result);
    });
