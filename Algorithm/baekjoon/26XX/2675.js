/**
 * @link https://www.acmicpc.net/problem/2675
 * @since 2021/04/28
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
})
    .on('close', () => {
        const [, ...strList] = input;

        strList.forEach(value => {
            const [countStr, str] = value.split(' ');
            let newStr = '';

            for(let i = 0; i < str.length; i++){
                for (let j = 0; j < Number(countStr); j++){
                    newStr += str[i];
                }
            }

            console.log(newStr);
        });

        process.exit();
    });