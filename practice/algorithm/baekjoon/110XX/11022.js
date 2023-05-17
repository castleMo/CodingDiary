/**
 * @link https://www.acmicpc.net/problem/11022
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
        const [strNum, ...strArr] = input;

        let result = '';
        let num = 1;

        for (const str of strArr) {
            const [num1, num2] = str.split(' ').map(Number);
            result += `Case #${num}: ${num1} + ${num2} = ${num1 + num2}\n`;
            num++;
        }

        console.log(result);

        process.exit();
    });