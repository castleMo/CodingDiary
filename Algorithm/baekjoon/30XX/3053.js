/**
 * @link https://www.acmicpc.net/problem/3053
 * @since 2021/05/08
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
        const [r] = input;

        console.log(`${Math.PI * r * r}\n${2 * r * r}`);

        process.exit();
    });