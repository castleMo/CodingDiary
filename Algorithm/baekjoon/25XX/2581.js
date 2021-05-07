/**
 * @link https://www.acmicpc.net/problem/2581
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
        const [m, n] = input;

        let sum = 0;
        let min = 10001;
        const primeNumberArr= [];

        for(let i = m; i <= n; i++) {
            if(i === 1) continue;

            let primeNumberFlag = true;
            for(let j = 2; j < i; j++) {
                if(i % j === 0) {
                    primeNumberFlag = false;
                    break;
                }
            }

            if(primeNumberFlag) {
                primeNumberArr.push(i);
                if(min > i) {
                    min = i;
                }
                sum += i;
            }
        }

        if(primeNumberArr.length > 0) {
            console.log(sum);
            console.log(min);
        } else {
            console.log(-1);
        }

        process.exit();
    });