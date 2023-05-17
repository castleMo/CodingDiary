/**
 * @link https://www.acmicpc.net/problem/9020
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
        const [, ...numArr] = input;

        numArr.forEach(value => {
            const num = value / 2;
            let a = num - 1;
            let b = num + 1;
            while(true) {
                if(isPrimeNumber(num)) {
                    console.log(`${num} ${num}`);
                    break;
                }

                if(isPrimeNumber(a) && isPrimeNumber(b)) {
                    console.log(`${a} ${b}`);
                    break;
                }

                a--;
                b++;
            }
        });

        process.exit();
    });

function isPrimeNumber (num) {
    let primeNumberFlag = true;
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            primeNumberFlag = false;
            break;
        }
    }
    return primeNumberFlag;
}