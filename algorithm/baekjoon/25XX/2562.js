/**
 * @link https://www.acmicpc.net/problem/2562
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

        let index = 0;
        let max = -1;
        input.forEach((value, i) => {
            if(max < value) {
                max = value;
                index = i + 1;
            }
        });

        console.log(`${max}\n${index}`);

        process.exit();
    });