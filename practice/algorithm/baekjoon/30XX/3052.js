/**
 * @link https://www.acmicpc.net/problem/3052
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

        const numArr = input.reduce((accumulator, currentValue) => {
            // 나머지를 담는 변수
            const remainder = currentValue % 42;

            // 배열과 현재 계산된 나머지를 비교해서 같은 값이 있는지 없는지 판단 (true: 같은게 없음 / false: 같은게 있음)
            const flag = accumulator.find((element => element === remainder)) === undefined;

            if(flag) accumulator.push(remainder);

            return accumulator;
        }, []);

        console.log(numArr.length);

        process.exit();
    });