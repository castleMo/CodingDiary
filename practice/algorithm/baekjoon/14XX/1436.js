/**
 * @link https://www.acmicpc.net/problem/1436
 * @since 2021/05/13
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
        let [count] = input;

        let num = 665;

        while (count > 0) {
            num++;
            if (String(num).includes('666')) count--;

        }

        console.log(num);

        process.exit();
    });