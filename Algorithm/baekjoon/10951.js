/**
 * @link https://www.acmicpc.net/problem/
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
})
    .on('close', () => {
        input.forEach(([num1, num2]) => {
            console.log(num1 + num2);
        });

        process.exit();
    });