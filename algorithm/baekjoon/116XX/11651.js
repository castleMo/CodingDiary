/**
 * @link https://www.acmicpc.net/problem/11651
 * @since 2021/06/13
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
})
    .on('close', () => {
        const [, ...strArr] = input;

        let result = '';

        strArr.sort((a, b) => {
            const [numAX, numAY] = a.split(' ').map(Number);
            const [numBX, numBY] = b.split(' ').map(Number);
            if(numAY === numBY) {
                return numAX - numBX;
            } 
            return numAY - numBY;
        }).forEach((arr) => {
            const [x, y] = arr.split(' ');
            result += `${x} ${y}\n`;
        });

        console.log(result);

        process.exit();
    });