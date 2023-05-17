/**
 * @link https://www.acmicpc.net/problem/1929
 * @since 2021/05/07
 */

// Solution 1
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

        const [m, n] = str.split(' ').map(Number);

        for (let i = m; i <= n; i++) {
            if (i === 1) continue;

            let primeNumberFlag = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    primeNumberFlag = false;
                    break;
                }
            }

            if (primeNumberFlag) {
                console.log(i);
            }
        }

        process.exit();
    });