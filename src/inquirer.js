const inquirer = require('inquirer');
const question = [{
        type: 'list',
        name: 'keyB',
        message: '你喜欢什么音乐',
        choices: [
            '1.千里之外',
            '2.成都的少年',
            '3.我已经爱上你'
        ]
    },
    {
        type: 'input',
        message: '请输入你的年龄',
        name: 'age',
    },
    {
        type: 'number',
        message: '请输入你的身高',
        name: 'number'
    },
    {
        type: 'password',
        message: '请输入你的密码',
        name: 'password',
        mask: true
    },
    {
        type: 'confirm',
        name: 'comfirm',
        message: '请确认一下你的问题？',

    }
];

inquirer
    .prompt(question)
    .then(answer => {
        console.log(answer);
    })