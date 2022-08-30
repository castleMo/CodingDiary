/**
 * @link https://www.acmicpc.net/problem/2231
 * @since 2021/05/13
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
        const [numStr] = input;

        const n = Number(numStr);

        let flag = true;

        for(let i = 1; i < n; i++) {
            const strI = String(i);
            let sum = i;
            for(let j = 0; j < strI.length; j++) {
                sum += Number(strI[j]);
            }

            if(sum === n) {
                console.log(i);
                flag = false;
                break;
            }
        }

        if(flag) console.log(0);

        process.exit();
    });