/**
 * @link https://www.acmicpc.net/problem/2438
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
        const [num1] = input;

        for (let i = 0; i < num1; i++ ) {
            let result = '';
            for(let j = 0; j <= i; j++) {
                result += '*';
            }
            console.log(result);
        }

        process.exit();
    });