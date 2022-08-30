/**
 * @link https://www.acmicpc.net/problem/10989
 * @since 2021/05/16
 */

// 메모리 부족현상 발생

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
        const [, ...numArr] = input;

        const counterArr = [];
        const set = new Set(numArr);

        let max = 0;

        // 수의 최댓값 구하기
        set.forEach(value => {
            if (value > max) max = value;
        });

        // 최댓값에 맞춰 배열 초기화
        for (let i = 0; i < max; i++) {
            counterArr.push(0);
        }

        // counting
        numArr.forEach(value => {
            const index = value - 1;
            counterArr[index] += 1;
        });

        // counting된거에 맞춰 printArr에 push
        counterArr.forEach((value, index) => {
            for (let i = 0; i < value; i++) {
                console.log(index + 1)
            }
        });

        process.exit();
    });
