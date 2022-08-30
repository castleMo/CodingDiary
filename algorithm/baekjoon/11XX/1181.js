/**
 * @link https://www.acmicpc.net/problem/1181
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
        let previousStr = '';

        strArr.sort((a, b) => {
            if(a.length === b.length) {
                let index = 0;
                let numA = 0;
                let numB = 0;
                while(true) {
                    const charA = a.charCodeAt(index);
                    const charB = b.charCodeAt(index);
                    if(charA !== charB) {
                        numA = charA;
                        numB = charB;
                        break;
                    }
                    index++;
                }
                return numA - numB;
            }
            return a.length - b.length;
        }).forEach((str) => {
            if(str !== previousStr) {
                result += str + '\n';
                previousStr = str;
            }
        });
        
        console.log(result);

        process.exit();
    });