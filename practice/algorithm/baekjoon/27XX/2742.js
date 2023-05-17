/**
 * @link https://www.acmicpc.net/problem/2742
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

        let result = '';

        for (let i = num1; i > 0; i--) {
            result += `${i}\n`;
        }

        console.log(result);

        process.exit();
    });