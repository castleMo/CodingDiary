/**
 * @link https://www.acmicpc.net/problem/4948
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
        const [...arr] = input;

        arr.pop();

        arr.forEach(value => {
            const primeNumberArr = [];
            if(value === 1) primeNumberArr.push(2);
            for(let i = value + 1; i < value * 2; i++) {
                let primeNumberFlag = true;

                for (let j = 2; j <= Math.sqrt(i); j++) {
                    if (i % j === 0) {
                        primeNumberFlag = false;
                        break;
                    }
                }

                if (primeNumberFlag) {
                    primeNumberArr.push(i);
                }
            }

            console.log(primeNumberArr.length);
        });

        process.exit();
    });