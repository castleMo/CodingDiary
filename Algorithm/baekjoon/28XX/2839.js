/**
 * @link https://www.acmicpc.net/problem/2839
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
        let [sugar] = input;

        let small = 0;

        while(true) {
            if(sugar % 5 === 0) {
                console.log((sugar / 5) + small);
                break;
            } else if (sugar <= 0) {
                console.log(-1);
                break;
            }
            sugar -= 3;
            small++;
        }

        process.exit();
    });