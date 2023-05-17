/**
 * @link https://www.acmicpc.net/problem/7568
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
        const [, ...strArr] = input;

        const resultArr = [];

        const arr = strArr.map(value => {
            return value.split(' ').map(Number);
        });

        for (let i = 0; i < arr.length; i++) {
            let rank = 1;

            for (let j = 0; j < arr.length; j++) {
                if(arr[j][0] > arr[i][0] && arr[j][1] > arr[i][1] && i !== j) rank++;
            }

            resultArr.push(rank);
        }

        console.log(resultArr.join(' '));

        process.exit();
    });