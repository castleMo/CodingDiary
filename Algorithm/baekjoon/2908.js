/**
 * @link https://www.acmicpc.net/problem/2908
 * @since 2021/04/28
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

        const [numStr1, numStr2] = str.trim().split(' ');

        const num1 = Number(numStr1[2] + numStr1[1] + numStr1[0]);
        const num2 = Number(numStr2[2] + numStr2[1] + numStr2[0]);

        console.log(`${num1 < num2 ? num2 : num1}`);

        process.exit();
    });