/**
 * @link https://www.acmicpc.net/problem/
 * @since 2021/
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(Number(line));
    input.push(line);
})
    .on('close', () => {
        const [] = input;

        process.exit();
    });