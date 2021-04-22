/**
 * @link https://www.acmicpc.net/problem/2439
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

        for (let i = 1; i <= num1; i++) {
            let result = '';

            for (let j = num1 - i; j > 0; j--) {
                result += ' ';
            }

            for (let k = 0; k < i; k++) {
                result += '*';
            }

            console.log(result);
        }

        process.exit();
    });