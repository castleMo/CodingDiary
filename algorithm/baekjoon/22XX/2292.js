/**
 * @link https://www.acmicpc.net/problem/2292
 * @since 2021/05/06
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
        const [num] = input;

        if (num === 1) console.log(1);

        let size = 1;

        for(let i = 1; i < num; i++) {
            if(size < num && (size + (i * 6)) >= num ) {
                console.log(i + 1);
                break;
            }

            size += i * 6;
        }

        process.exit();
    });