/**
 * @link https://www.acmicpc.net/problem/2577
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
        const [numA, numB, numC] = input;

        const str = (numA * numB * numC).toString(10);

        const numArr = [0,0,0,0,0,0,0,0,0,0];

        for(const word of str) {
            numArr[Number(word)] += 1;
        }

        numArr.forEach(value => {
            console.log(value);
        });

        process.exit();
    });