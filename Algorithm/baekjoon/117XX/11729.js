/**
 * @link https://www.acmicpc.net/problem/11729
 * @since 2021/05/09
 */

// 참고: https://dip0cean.tistory.com/14

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(Number(line));
})
    .on('close', () => {
        const [num] = input;

        const result = {
            count: 0,
            str: '',
        }

        const {count, str} = move(num, 1, 3, result);

        console.log(count);
        console.log(str);

        process.exit();
    });

function move(n, x, y, result) {
    if (n > 1) move(n - 1, x, 6 - x - y, result);

    result.count += 1;
    result.str += x + ' ' + y + '\n';

    if (n > 1) move(n - 1, 6 - x - y, y, result);

    return result;
}