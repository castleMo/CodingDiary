/**
 * @link https://www.acmicpc.net/problem/10870
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

        // solution1(num);

        solution2(num);

        process.exit();
    });

function solution1(num) {
    let f1 = 0;
    let f2 = 1;

    for (let i = 1; i <= num; i++) {
        let sum = f1 + f2;
        if (i % 2 === 0) f2 = sum;
        else f1 = sum;
    }

    if (num % 2 === 0) {
        console.log(f1);
    } else {
        console.log(f2);
    }
}

function solution2(num) {
    const result = factorial(0, 1, 0, num);
    console.log(result);
}

function factorial(f1, f2, index, num) {
    if (index === num) {
        if (num % 2 === 0) return f1;
        else return f2;
    }

    if (index % 2 === 0) return factorial(f1, f1 + f2, ++index, num);
    else return factorial(f1 + f2, f2, ++index, num);
}