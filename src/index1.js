const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
    input: fs.createReadStream(path.resolve(__dirname, 'sample.txt')),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    console.log(`文件的每行内容：${line}`);
});