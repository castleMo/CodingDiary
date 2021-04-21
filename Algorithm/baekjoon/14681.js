/**
 * @link https://www.acmicpc.net/problem/14681
 */

/*  fs 모듈로 실행시에 오류나는 문제
const fs = require('fs');
const [x, y] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

if (x < 0) {
    y < 0 ? console.log(3) : console.log(2);
} else {
    y < 0 ? console.log(4) : console.log(1);
}
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(Number(line));
}).on('close', function () {
    const [X, Y] = input;

    if (X < 0) {
        Y < 0 ? console.log(3) : console.log(2);
    } else {
        Y < 0 ? console.log(4) : console.log(1);
    }

    process.exit();
});