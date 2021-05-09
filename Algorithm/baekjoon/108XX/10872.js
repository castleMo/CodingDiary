/**
 * @link https://www.acmicpc.net/problem/10872
 * @since 2021/05/09
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

        // solution1
        // solution1(num);

        // solution2
        solution2(num);

        process.exit();
    });

function solution1(num) {
    if(num === 0) {
        console.log(1);
    } else {
        let factorial = 1;
        for(let i = 1; i <= num; i++) {
            factorial *= i;
        }

        console.log(factorial);
    }
}

function solution2(num) {
    const sum = factorial(num);
    console.log(sum);
}

function factorial(num) {
    if(num <= 1) return 1;
    return num * factorial(num - 1);
}