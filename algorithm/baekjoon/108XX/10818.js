/**
 * @link https://www.acmicpc.net/problem/10818
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
        const [, str] = input;

        const numArr = str.split(' ').map(Number);

        let max = -1000000;
        let min = 1000000;

        numArr.forEach(value => {
           if(value > max) max = value;
           if(value < min) min = value;
        });

        console.log(`${min} ${max}`);

        process.exit();
    });