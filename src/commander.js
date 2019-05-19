#!/usr/bin/env node

const program = require('commander')

program
    .version('0.1.0')
    .option('-C, --chdir <path>', 'change the working directory')
    .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
    .option('-T, --no-tests', 'ignore test hook')
    .action(option => {
        console.log(option.chdir)
        console.log(option.config)

    })

program
    .command('setup [env]')
    .description('run setup commands for all envs')
    .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .action(function(env, options) {
        var mode = options.setup_mode || "normal";
        env = env || 'all';
        console.log('setup for %s env(s) with %s mode', env, mode);
    });

program
    .command('exec <cmd>')
    .alias('ex')
    .description('execute the given remote cmd')
    .option("-e, --exec_mode <mode>", "Which exec mode to use")
    .action(function(cmd, options) {
        console.log('exec "%s" using %s mode', cmd, options.exec_mode);
    }).on('--help', function() {
        console.log('');
        console.log('Examples:');
        console.log('');
        console.log('  $ deploy exec sequential');
        console.log('  $ deploy exec async');
    });

program
    .command('*')
    .action(function(env) {
        console.log('deploying "%s"', env);
    });

program
    .command('likeju [env]')
    .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .option('-n, --name [name]', 'input a name')
    .option('-r, --required <required>', '这个是帮助信息的描述')
    .action(function(env, options) {
        console.log(options)
        console.log('获取的参数%s', options.name)
    })
program.parse(process.argv);