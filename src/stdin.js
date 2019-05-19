process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        console.log('写入i 控制台的数据')
            // process.stdin.resume()
        process.stdout.write(`数据${chunk}`)
            // process.stdin.pipe(process.stdout)
    }
})
console.log(process.versions)
process.stdin.on('end', () => {
    console.log('结束了吗？')
    process.stdout.write('结束')
})