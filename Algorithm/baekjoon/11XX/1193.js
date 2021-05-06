/**
 * @link https://www.acmicpc.net/problem/1193
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
        let [num] = input;


        let counter = 0;
        // 분자 배열
        const ascendingArr = [];
        // 분모 배열
        const descendingArr = [];

        while (num > 0) {
            counter++;
            num -= counter;
        }

        for(let i = 0; i < counter; i++) {
            ascendingArr.push(i + 1);
            descendingArr.push(counter - i);
        }

        if(counter % 2 === 0) {
            console.log(
                `${ascendingArr[counter - 1 + num]}/${descendingArr[counter - 1 + num]}`
            );
        } else {
            console.log(
                `${descendingArr[counter - 1 + num]}/${ascendingArr[counter - 1 + num]}`
            );
        }

        process.exit();
    });