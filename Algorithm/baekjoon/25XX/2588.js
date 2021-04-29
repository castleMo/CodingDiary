/**
 * @link https://www.acmicpc.net/problem/2588
 */

const fs = require('fs');
const [str1, str2] = fs.readFileSync('/dev/stdin').toString().split('\n');

const num1 = Number(str1)
const numberArr = [str2[0], str2[1], str2[2]].map(v => Number(v));

const result3 = num1 * numberArr[2];
const result4 = num1 * numberArr[1];
const result5 = num1 * numberArr[0];
const result6 = num1 * Number(str2);

console.log(
    `${result3}\n` +
    `${result4}\n` +
    `${result5}\n` +
    `${result6}`
);