/**
 * @link https://www.acmicpc.net/problem/11654
 * @since 2021/04/28
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
        const [str] = input;

        console.log(str.charCodeAt(0));

        process.exit();
    });