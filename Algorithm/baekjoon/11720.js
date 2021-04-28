/**
 * @link https://www.acmicpc.net/problem/11720
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
        const [, str] = input;

        const numArr = str.split('').map(Number);

        let sum = 0;
        numArr.forEach(value => {
            sum += value;
        });

        console.log(sum);

        process.exit();
    });