/**
 * @link https://www.acmicpc.net/problem/3009
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

        const coordinates = str.reduce((pre, cur) => {
            const [a, b] = cur.split(' ').map(Number);
            pre[0].push(a);
            pre[1].push(b);
            return pre;
        }, [[], []]);

        let x = 0;
        let y = 0;

        if(coordinates[0][0] === coordinates[0][1]) {
            x = coordinates[0][2]
        } else if (coordinates[0][1] === coordinates[0][2]) {
            x = coordinates[0][0]
        } else if (coordinates[0][0] === coordinates[0][2]) {
            x = coordinates[0][1]
        }

        if(coordinates[1][0] === coordinates[1][1]) {
            y = coordinates[1][2]
        } else if (coordinates[1][1] === coordinates[1][2]) {
            y = coordinates[1][0]
        } else if (coordinates[1][0] === coordinates[1][2]) {
            y = coordinates[1][1]
        }

        console.log(`${x} ${y}`);

        process.exit();
    });