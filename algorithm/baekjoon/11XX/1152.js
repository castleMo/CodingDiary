/**
 * @link https://www.acmicpc.net/problem/1152
 * @since 2021/04/28
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
        const [str] = input;

        const list = str.trim().split(' ').reduce((accumulator, currentValue) => {
            if(currentValue !== '') {
                accumulator.push(currentValue);
            }
                return accumulator;
        }, []);

        console.log(list.length);

        process.exit();
    });