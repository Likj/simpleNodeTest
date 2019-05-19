const ora = require('ora');


const spinner = ora({
    text: '初始化中！',
    prefixText: '标题',
    stream: process.stdout,
}).start();

setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = '修改文本'
}, 1000);
setTimeout(() => {
    spinner.succeed('成功')
}, 2000);

setTimeout(() => {
    spinner.fail('失败')
}, 3000);

setTimeout(() => {
    spinner.warn('警告')
}, 4000);

setTimeout(() => {
    spinner.info('信息')
}, 5000);
spinner.info('走过你自己')
spinner.stopAndPersist({
        text: '种植'
    })
    // setTimeout(() => {
    //     spinner.color = 'yellow';
    //     spinner.text = '修改文本'
    // }, 1000);


// setTimeout(() => {
//     spinner.color = 'yellow';
//     spinner.text = '修改文本'
// }, 1000);


// setTimeout(() => {
//     spinner.color = 'yellow';
//     spinner.text = '修改文本'
// }, 1000);


// setTimeout(() => {
//     spinner.color = 'yellow';
//     spinner.text = '修改文本'
// }, 1000);


// setTimeout(() => {
//     spinner.color = 'yellow';
//     spinner.text = '修改文本'
// }, 1000);



// setTimeout(() => {
//     spinner.color = 'yellow';
//     spinner.text = '修改文本'
// }, 1000);


// setTimeout(() => {
//     spinner.color = 'yellow';
//     spinner.text = '修改文本'
// }, 1000);


// setTimeout(() => {
//     spinner.color = 'yellow';
//     spinner.text = '修改文本'
// }, 1000);