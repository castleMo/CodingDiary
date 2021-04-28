/**
 * @link https://www.acmicpc.net/problem/1065
 * @since 2021/04/28
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
        const [num] = input;

        const hansuList = [];

        // 입력받은 num이 99보다 큰지 작은지를 저장하는 변수
        const flag = num > 99;
        const length = flag ? 99 : num;

        for (let i = 1; i < length + 1; i++) {
            hansuList.push(i);
        }

        if (flag) {
            for(let i = 100; i <= num; i++) {
                let hansuFlag = false;

                const str = i.toString(10);
                const hundreds = Number(str[2]);
                const tens = Number(str[1]);
                const units = Number(str[0]);

                // 세자리 수가 모두 같을때
                if(hundreds === tens && tens === units){
                    hansuFlag = true;

                // 세자리 수가 증가 규칙이 같을때
                } else if ((units - tens) === (tens - hundreds)) {
                    hansuFlag = true;
                }

                if(hansuFlag) hansuList.push(i);

            }
        }

        console.log(hansuList.length);


        process.exit();
    });