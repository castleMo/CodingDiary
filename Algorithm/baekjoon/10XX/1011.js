/**
 * @link https://www.acmicpc.net/problem/1011
 * @since 2021/05/06
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
        const [, ...str] = input;

        str.forEach(value => {
            const [x, y] = value.split(' ').map(Number);

            // 이동해야할 거리
            let distance = y - x;

            // 제곱수 구하기
            let sqrt = Math.floor(Math.sqrt(distance));

            let remainder = distance - (sqrt * sqrt);
            remainder = Math.ceil(remainder / sqrt);

            console.log((sqrt * 2) - 1 + remainder);

        });

        process.exit();
    });