/**
 * @link https://www.acmicpc.net/problem/5622
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

        const dialMap = new Map();
        const timeCountList = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        for(let i = 65; i < 91; i++) {
            if(i < 68) {
                dialMap.set(String.fromCharCode(i), 2);
            } else if (i < 71){
                dialMap.set(String.fromCharCode(i), 3);
            } else if (i < 74) {
                dialMap.set(String.fromCharCode(i), 4);
            } else if (i < 77) {
                dialMap.set(String.fromCharCode(i), 5);
            } else if (i < 80) {
                dialMap.set(String.fromCharCode(i), 6);
            } else if(i < 84) {
                dialMap.set(String.fromCharCode(i), 7);
            }else if (i < 87) {
                dialMap.set(String.fromCharCode(i), 8);
            } else {
                dialMap.set(String.fromCharCode(i), 9);
            }
        }

        let sum = 0;
        for(let i = 0; i < str.length; i++) {
            const index = dialMap.get(str[i]);
            sum += timeCountList[index];
        }

        console.log(sum);

        process.exit();
    });