/**
 * @link https://www.acmicpc.net/problem/10814
 * @since 2021/06/13
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
let index = 0;

rl.on('line', (line) => {
    input.push(line + ` ${index}`);
    index++;
})
    .on('close', () => {
        const [, ...strArr] = input;

        let result = '';

        strArr.sort((a,b) => {
            const [strAgeA, , strIndexA] = a.split(' ');
            const ageA = Number(strAgeA);
            const indexA = Number(strIndexA);
            const [strAgeB, , strIndexB] = b.split(' ');
            const ageB = Number(strAgeB);
            const indexB = Number(strIndexB);

            if(ageA !== ageB) {
                return ageA - ageB;
            }
            return indexA - indexB;
        }).forEach((str) => {
            const [a, b] = str.split(' ');
            result += `${a} ${b}\n`;
        });

        console.log(result);

        process.exit();
    });