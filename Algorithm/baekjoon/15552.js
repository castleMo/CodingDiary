/**
 * @link https://www.acmicpc.net/problem/15552
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

        let result = '';

        for(const strNum of strArr) {
            const [num1, num2] = strNum.trim().split(' ').map(Number);
            result += `${num1 + num2}\n`
        }

        console.log(result);

        process.exit();
    });