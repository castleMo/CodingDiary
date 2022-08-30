/**
 * @link https://www.acmicpc.net/problem/1002
 * @since 2021/05/08
 */

// 참고 사이트 : https://dpsc615.tistory.com/121
// 참고 사이트 : https://mathbang.net/101

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

            strArr.forEach(value => {
                let [x1, y1, r1, x2, y2, r2] = value.split(' ').map(Number);

                const dx = x1 - x2;
                const dy = y1 - y2;

                if (r1 > r2) {
                    const temp = r1;
                    r1 = r2;
                    r2 = temp;
                }

                const rSum = (r1 + r2) * (r1 + r2);
                const rSub = (r2 - r1) * (r2 - r1);

                const d = (dx * dx) + (dy * dy);

                if (d < rSum && d > rSub) {
                    console.log(2);
                } else if (d === rSum || (d === rSub && d !== 0)) {
                    console.log(1);
                } else if (d < rSub || d > rSum) {
                    console.log(0);
                } else if (d === 0) {
                    if (r1 === r2) {
                        console.log(-1);
                    } else {
                        console.log(0);
                    }
                }

            });
            process.exit();
        }
    );