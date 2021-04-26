/**
 * @link https://www.acmicpc.net/problem/10952
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    if(line !== '0 0') input.push(line.split(' ').map(Number));
})
    .on('close', () => {
        input.forEach(([num1, num2]) => {
           console.log(num1 + num2);
        });

        process.exit();
    });