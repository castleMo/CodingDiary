/**
 * @link https://www.acmicpc.net/problem/10869
 */

const fs = require('fs');
const [num1, num2] = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => Number(value));

console.log(
    `${num1 + num2}\n` +
    `${num1 - num2}\n` +
    `${num1 * num2}\n` +
    `${Math.floor(num1 / num2)}\n` +
    `${num1 % num2}`
);