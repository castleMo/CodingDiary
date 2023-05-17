/**
 * @link https://www.acmicpc.net/problem/2750
 * @since 2021/05/16
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(Number(line));
})
    .on('close', () => {
        const [, ...numArr] = input;

        numArr.sort((a, b) => {
            return a - b;
        });
        
        console.log(numArr.join('\n'));

        process.exit();
    });