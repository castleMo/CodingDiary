/**
 * @link https://www.acmicpc.net/problem/10430
 */

const fs = require('fs');
const [A, B, C] = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => Number(value));

console.log(
    `${(A + B) % C}\n` +
    `${((A % C) + (B % C)) % C}\n` +
    `${(A * B) % C}\n` +
    `${((A % C) * (B % C)) % C}`
);