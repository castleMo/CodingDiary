/**
 * @link https://www.acmicpc.net/problem/2798
 * @since 2021/05/13
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
        const [n, m] = input.shift().split(' ').map(Number);
        const numArr = input.shift().split(' ').map(Number);

        let max = 0;

        for(let i = 0; i < numArr.length; i++) {
            for(let j = i + 1; j < numArr.length; j++) {
                for(let k = j + 1; k < numArr.length; k++) {
                    const sum = numArr[i] + numArr[j] + numArr[k];
                    if(max < sum && sum <= m) max = sum;
                }
            }
        }

        console.log(max);

        process.exit();
    });