/**
 * @link https://www.acmicpc.net/problem/11653
 * @since 2021/05/07
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
        let [num] = input;

        while(num > 1) {
            for(let i = 2; i <= num; i++) {
                if(num % i === 0) {
                    num /= i;
                    console.log(i);
                    break;
                }
            }
        }

        process.exit();
    });