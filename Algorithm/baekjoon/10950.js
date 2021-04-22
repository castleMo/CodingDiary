/**
 * @link https://www.acmicpc.net/problem/10950
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
        const [strLength, ...strArr] = input;

        for(const strNum of strArr) {
            const [num1, num2] = strNum.trim().split(' ').map(Number);
            console.log(`${num1 + num2}`);
        }

        process.exit();
    });