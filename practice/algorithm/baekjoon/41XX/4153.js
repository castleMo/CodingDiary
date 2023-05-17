/**
 * @link https://www.acmicpc.net/problem/4153
 * @since 2021/05/07
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
        const [...str] = input;

        str.pop();

        str.forEach(value => {
            const sides = value.split(' ').map(Number);
            let A = -1;
            let B = -1;
            let C = -1;
            let maxIndex = 0;

            sides.forEach((value, i) => {
                if(C < value) {
                    C = value;
                    maxIndex = i;
                }
            });

            switch (maxIndex) {
                case 0:
                    A = sides[1];
                    B = sides[2];
                    break;
                case 1:
                    A = sides[0];
                    B = sides[2];
                    break;
                case 2:
                    A = sides[0];
                    B = sides[1];
                    break;
                default :
                    break;
            }

            if(A === 1 && B === 1 && C === 1)
                console.log('wrong');
            else if (Math.pow(A, 2) + Math.pow(B, 2) === Math.pow(C, 2))
                console.log('right');
            else
                console.log('wrong');
        })

        process.exit();
    });