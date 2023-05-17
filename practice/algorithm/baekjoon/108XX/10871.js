/**
 * @link https://www.acmicpc.net/problem/10871
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
        const [str1, str2] = input;

        const [length, num1] = str1.split(' ').map(Number);

        const numArr = str2.split(' ').map(Number);

        const result = numArr.reduce((previousValue, currentValue) => {
            if( currentValue < num1) {
                previousValue += currentValue + ' ';
            }

            return previousValue;
        }, '');

        console.log(result);

        process.exit();
    });