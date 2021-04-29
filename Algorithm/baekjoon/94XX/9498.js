/**
 * @link https://www.acmicpc.net/problem/9498
 */

const fs = require('fs');
const [num1] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let result = '';
if (num1 >= 90) {
    result = 'A';
} else if (num1 >= 80) {
    result = 'B';
} else if (num1 >= 70) {
    result = 'C';
} else if (num1 >= 60) {
    result = 'D';
} else {
    result = 'F'
}

console.log(result);