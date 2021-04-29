/**
 * @link https://www.acmicpc.net/problem/1316
 * @since 2021/04/29
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
        const [, ...str] = input;

        let groupWordCount = 0;

        str.forEach(value => {
            let word = '';
            let groupWordFlag = true;
            for (let i = 0; i < value.length; i++) {
                if (word.indexOf(value[i]) === -1) {
                    word += value[i];
                } else {
                    if (word.indexOf(value[i]) !== word.length - 1) {
                        groupWordFlag = false;
                        break;
                    }
                }
            }
            if(groupWordFlag) groupWordCount++;
        });

        console.log(groupWordCount);

        process.exit();
    });