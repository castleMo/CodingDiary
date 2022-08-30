/**
 * @link https://www.acmicpc.net/problem/1978
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
        const [, str] = input;

        const numArr = str.split(' ').map(Number);

        const primeNumberArr = numArr.reduce((previousValue, currentValue) => {
            if(currentValue === 1) return previousValue;

            let flag = true;

            for(let i = 2; i < currentValue; i++) {
                if(currentValue % i === 0) flag = false;
            }

            if(flag) previousValue.push(currentValue);

            return previousValue;
        }, []);

        console.log(primeNumberArr.length);

        process.exit();
    });