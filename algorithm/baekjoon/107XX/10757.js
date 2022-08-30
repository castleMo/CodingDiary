/**
 * @link https://www.acmicpc.net/problem/10575
 * @since 2021/05/06
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
        let [a, b] = str.split(' ');

        const length = a.length - b.length;

        if (length < 0) {
            a = a.padStart(b.length, '0');
        } else {
            b = b.padStart(a.length, '0');
        }

        let sum = [];
        let ten = 0;

        for (let i = a.length; i > 0; i--) {
            let charSum = 0;
            if(i === a.length) {
                charSum = Number(a[i - 1]) + Number(b[i - 1]) + ten;
            } else {
                charSum = Number(a[i - 1]) + Number(b[i - 1]) + ten;
            }
            if (charSum >= 10) {
                ten = 1;
                sum.unshift(charSum % 10);
            } else {
                ten = 0;
                sum.unshift(charSum);
            }

            if(i === 1 && charSum >= 10) {
                sum.unshift(1);
            }
        }

        console.log(sum.join(''));

        process.exit();
    });