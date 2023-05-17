/**
 * @link https://www.acmicpc.net/problem/8393
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
        const [num1] = input;

        let sum = 0;

        for (let i = 1; i <= num1; i++) {
            sum += i;
        }

        console.log(sum);

        process.exit();
    });