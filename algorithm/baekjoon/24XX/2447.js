/**
 * @link https://www.acmicpc.net/problem/2447
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
    input.push(line);
})
    .on('close', () => {
        const [num] = input;

        solution2(num);

        process.exit();
    });

function solution1(num) {
}

function solution2(num) {
    let star = '';

    for(let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            star += factorial(i, j, num);
        }
        star += '\n';
    }
    console.log(star);
}

function factorial(i, j, num) {
    if(i % 3 === 1 && j % 3 === 1) {
        return ' ';
    } else {
        if(num === 1) {
            return '*';
        } else {
            return factorial(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
        }
    }
}