/**
 * @link https://www.acmicpc.net/problem/2739
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(Number(line));
})
    .on('close', () => {
        const [num1] = input;

        for(let i = 1; i < 10; i++ ) {
            console.log(`${num1} * ${i} = ${num1 * i}`);
        }

        process.exit();
    });