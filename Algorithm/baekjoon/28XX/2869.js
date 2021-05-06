/**
 * @link https://www.acmicpc.net/problem/2869
 * @since 2021/05/06
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
        const [str] = input;

        // A: up, B: down, C: end
        const [A, B, C] = str.split(' ').map(Number);

        const day = Math.ceil((C - B) / (A - B));

        console.log(day);

        process.exit();
    });