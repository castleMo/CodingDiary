/**
 * @link https://www.acmicpc.net/problem/
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
        const [baseValue] = input;

        // while문의 flag
        let flag = true;

        // 새로운수를 저장하는 변수
        let newValue = baseValue;

        // 사이클 길이를 저장하는 변수
        let length = 1;

        while (flag) {
            // 십의자리 숫자
            const tens = Math.floor(newValue / 10);

            // 일의자리 숫자
            const units = newValue % 10;

            newValue = (units * 10) + ((units + tens) % 10);

            if (baseValue === newValue) {
                flag = false;
            } else {
                // while문이 한번돌면 길이를 더한다
                length++;
            }
        }

        console.log(length);

        process.exit();
    });