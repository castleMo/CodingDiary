/**
 * @link https://www.acmicpc.net/problem/1427
 * @since 2021/06/13
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
        const [numStr] = input;

        const numArr = numStr.split('').map(Number);

        numArr.sort((a, b) => b - a);

        let result = '';

        for(const num of numArr) {
            result += num
        }

        console.log(result);

        process.exit();
    });