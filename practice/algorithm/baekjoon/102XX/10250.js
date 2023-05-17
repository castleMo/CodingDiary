/**
 * @link https://www.acmicpc.net/problem/10250
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
        const [, ...strArr] = input;

        strArr.forEach(value => {
            const [h, w, n] = value.split(' ').map(Number);

            let roomW = Number.isInteger(n / h) ? n / h : Math.ceil(n / h);

            let roomH = n % h === 0 ? h : n % h;

            console.log(`${roomH}${roomW < 10 ? '0' + roomW : roomW}`);

        });

        process.exit();
    });