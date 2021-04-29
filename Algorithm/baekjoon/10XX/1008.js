/**
 * @link https://www.acmicpc.net/problem/1008
 */

const fs = require('fs');
const [num1, num2] = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(`${Number(num1) / Number(num2)}`);