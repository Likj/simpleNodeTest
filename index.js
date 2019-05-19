#!/usr/bin/env node

const inquirer = require('inquirer');
const ora = require('ora');
const sleep = require('sleep')
const chalk = require('chalk')
const commander = require('commander')

const spinner = ora({
    text: '即将开始AI问答环节',
    color: 'green'
});

const question = [{
    type: 'input',
    name: 'question',
    message: '请输入您的问题'
}];

const humanAsk = () => {

}

const aiAnswer = (ask) => {
    return ask
        .replace('吗', '')
        .replace('?', '!')
        .replace('？', '。')
}

function start() {
    inquirer
        .prompt(question)
        .then(answer => {
            spinner.text = '容AI思考一下'
            spinner.start();
            sleep.sleep(1);
            spinner.succeed(chalk.yellow(aiAnswer(answer.question)));
            start()
        })
}
start()

commander
    .command('start')
    .action(() => {
        start()
    })