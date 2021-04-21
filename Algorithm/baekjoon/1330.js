/**
 * @link https://www.acmicpc.net/problem/1330
 */

const fs = require('fs');
const [num1, num2] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const result = num1 < num2 ? '<' : num1 > num2 ? '>' : '==';

console.log(result);