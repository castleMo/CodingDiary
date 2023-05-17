/**
 * @link https://www.acmicpc.net/problem/2275
 * @since 2021/05/06
 */

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
        const [count, ...numArr] = input;

        const arr = [];

        for (let i = 0; i < count * 2; i += 2) {
            arr.push([numArr[i], numArr[i + 1]]);
        }

        arr.forEach(value => {
            const [k, n] = value;

            const peopleCountArr = [];
            for (let i = 0; i <= k; i++) {
                peopleCountArr[i] = [];
                for (let j = 1; j <= n; j++) {
                    let peopleCount = 0;
                    if (i === 0) {
                        peopleCountArr[i].push(j);
                    } else {
                        if (j === 1) {
                            peopleCountArr[i].push(j);
                        } else {
                            peopleCount += peopleCountArr[i][j - 2] + peopleCountArr[i - 1][j - 1];
                            peopleCountArr[i].push(peopleCount);
                        }
                    }
                }
            }

            console.log(peopleCountArr[k][n - 1]);
        });

        process.exit();
    });