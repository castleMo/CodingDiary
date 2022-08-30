/**
 * @link https://www.acmicpc.net/problem/1157
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

        const upperStr = str.toUpperCase();

        const set = new Set(upperStr.split(''));
        const map = new Map();

        set.forEach(value => {
            map.set(value, 0);
        });

        for (let i = 0; i < upperStr.length; i++) {
            map.set(upperStr[i], map.get(upperStr[i]) + 1);
        }

        let max = 0;
        let maxWord = '';
        const wordCountList = [];

        map.forEach((value, key) => {
            if (max < value) {
                maxWord = key;
                max = value;
            }
            wordCountList.push(value);
        });

        const isOverlap = wordCountList.filter(value => value === max).length >= 2;

        if(isOverlap) maxWord = '?';

        console.log(maxWord);

        process.exit();
    });