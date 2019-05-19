process.on('exit', (code) => {
    console.log(`您已经通过 ${code}状态吗退出`)
})
console.log(process.platform)
process.stdin.resume();

process.on('SIGINT', (input) => {
    console.log('receive sigint  press control D to exit$', input);
})

function handle(signal) {
    console.log(`Received ${signal}`);
}

process.on('SIGINT', handle);
process.on('SIGTERM', (sinnal) => {
        console.log(`received ${sinnal}`)
    })
    // process.abort()
    // process.exit(1008611)
console.log(process.platform)