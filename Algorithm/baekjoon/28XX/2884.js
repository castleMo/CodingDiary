/**
 * @link https://www.acmicpc.net/problem/2884
 */

const fs = require('fs');
const [H, M] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let resultH = H;
let resultM = M - 45;

if (resultM < 0) {
    if (resultH === 0) {
        resultH = 23;
    } else {
        resultH -= 1;
    }
    resultM += 60;
}

console.log(`${resultH} ${resultM}`);