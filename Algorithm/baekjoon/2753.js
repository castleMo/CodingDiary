/**
 * @link https://www.acmicpc.net/problem/2753
 */

const fs = require('fs');
const [num1] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let result = 0;

if ((num1 % 4 === 0 && num1 % 100 !== 0) || num1 % 400 === 0) {
    result = 1;
}

console.log(result);