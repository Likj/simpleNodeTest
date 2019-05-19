const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.write('删除这个！');
// 模拟 Ctrl+u 删除先前写入的行。
rl.write(null, { ctrl: true, name: 'u' });