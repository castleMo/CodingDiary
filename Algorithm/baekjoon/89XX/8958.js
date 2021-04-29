/**
 * @link https://www.acmicpc.net/problem/8958
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

        const numArr = strArr.reduce((accumulator, currentValue) => {
            let count = 0;
            let sum = 0;

            currentValue.split('').forEach(value => {
                if(value === 'O') {
                    count++;
                    sum += count;
                } else {
                    count = 0;
                }
            });

            accumulator.push(sum);

            return accumulator;
        }, []);

        numArr.forEach(value => console.log(value));

        process.exit();
    });