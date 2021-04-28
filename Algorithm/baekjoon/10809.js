/**
 * @link https://www.acmicpc.net/problem/10809
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

        const alphabetList = [];

        // alphabetList 에 a - z까지 입력
        for(let i = 97; i < 123; i++) {
            alphabetList.push(String.fromCharCode(i));
        }

        // 초기화
        const wordList = alphabetList.map(value => -1);

        for(let i = 0; i < str.length; i++){
            const index = alphabetList.indexOf(str[i]);
            if(wordList[index] === -1) wordList[index] = i;
        }

        const resultStr = wordList.reduce((accumulator, currentValue) => {
            accumulator += currentValue + ' ';
            return accumulator;
        }, '');

        console.log(resultStr);

        process.exit();
    });