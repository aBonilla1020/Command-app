const arg = require('yargs')
    .command('create', 'has been created', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'something'
        }
    })
    .command('uptade', 'has been uptaded', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'something'
        },
        completed: {
            default: true,
            alias: 'c',
            desc: 'something'
        }
    })
    .command('delete', 'has been deleted', {
        homework: {
            demand: true,
            alias: 'h',
            desc: 'something'
        }
    })
    .help()
    .argv;


module.exports = {
    arg
}