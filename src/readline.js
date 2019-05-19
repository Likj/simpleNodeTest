const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// rl.question('这个就是主动向客户提问题:', (answer) => {
//     console.log(`客户输入的内容${answer}`);
//     rl.close();
// });
rl.on('line', (input) => {
    console.log(`这个就是上一行的内容${input}`);

})
rl.on('SIGINT', () => {
    rl.question('确定要退出吗？', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.pause();
        // rl.parsu 不会立刻停止 line事件
    });
});
rl.on('SIGTSTP', () => {
    // 这将覆盖 SIGTSTP 并阻止程序进入后台。
    console.log('捕获 SIGTSTP');
    rl.question('确定退出吗？', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.pause();
    })
});
rl.setPrompt('请输入您的年龄:')
rl.prompt();