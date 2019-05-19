process.stdout.write('请输入用户名:');
process.stdin.setEncoding('utf8')
process.stdin.on('data', (input) => {

        process.stdout.write('用户输入的内容' + input);

        process.stdout.write('请再次输入（输入Q退出）', )

    })
    // drawin 里面就终止啦控制台
    // process.stdin.on('readable', () => {
    //     const chunk = process.stdin.read();
    //     if (chunk != null) {
    //         console.log(`主动获取的内容${chunk}`)
    //     }
    // })
process.stdin.on('end', () => {
    process.stdout.write('end');
});