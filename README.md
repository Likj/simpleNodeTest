# node - simple - fn
---
### 终端模块ttf 控制和用户的 输入输出， 一个输入流 一个输出流，process.stdin  process.stdout 分别是这两个的实例
----
   readline的createInterface 是一个实现类，参数 input output pormpt等；传入对应的内容 即可达到方便的控制
   每行的输入 监听对应line 事件即可获取，question prompt 等 事件方便用户的交流
1. 学习node的时候 有几个node的模块 是 需要学习的 本demo 是readlne模块的
---

### 一个微型cli
```
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '请输入> '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`你输入的是：'${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('再见!');
  process.exit(0);
});
```
2. 逐行读取 文本流
```
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('sample.txt'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`文件的每行内容：${line}`);
});
```
3. command 是一个高度封装的方便使用的终端交流控制模块
---
4. inquirer 是一个 控制用户输入 问题  记录用户问题的一个 高度封装的模块 将需要用户决定的内容 友好的 方式 给用户展示
  inquire 可以是 下啦选择 输入 确认等  相当于h5 的form  收集用户的输入 采取下一步的操作
5. ora 是一个 创建终端 loading toast 等一个工具， 提示给用户一些 信息  ora(..) 返回一个spinner 实例 
   spinner 上面 有 一些方法，一些属性 ，succeed  error  text color 等 
6.  commander 是一个 在启动的时候 命令行里面 的参数 方便解析的一个 模块  
   例如启动的时候  --name=zhangsan --age=18 --color=green 等 都能够方便的解析出来
   并且能够通过给的参数 生成--help的 文档内容
   常常用于讲命令注册到全局，时候 从启动参数里面 取参数

