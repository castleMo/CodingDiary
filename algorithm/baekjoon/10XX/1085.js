/**
 * @link https://www.acmicpc.net/problem/1085
 * @since 2021/05/07
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

        const [x, y, w, h] = str.split(' ').map(Number);

        let right = w - x;
        let up = h - y;

        if (up < y) {
            if(right < x) {
                console.log(up < right ? up : right);
            } else {
                console.log(up < x ? up : x);
            }
        } else {
            if(right < x) {
                console.log(y < right ? y : right);
            } else {
                console.log(y < x ? y : x);
            }
        }

        process.exit();
    });