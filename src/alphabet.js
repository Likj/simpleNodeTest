const Alphabet = require('alphabetjs');
const fs = require('fs');
const path = require('path');

const str = Alphabet('likeju', 'planar');


fs.writeFile('likeju.txt', str, (error) => {
        if (error) {
            throw error;
        }
        console.log('写入成功')
    })
    // fs.readFile('likeju.txt', 'utf-8', (err, data) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(data);
    // });