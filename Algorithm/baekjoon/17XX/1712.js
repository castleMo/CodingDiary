/**
 * @link https://www.acmicpc.net/problem/1712
 * @since 2021/05/04
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

        const [numA, numB, numC] = str.split(' ').map(Number);

        const income = numC - numB;

        // 손익분기점을 넘지 못할경우
        if (income <= 0) {
            console.log(-1)
        } else {
            console.log(Math.floor((numA / income) + 1));
        }

        process.exit();
    });