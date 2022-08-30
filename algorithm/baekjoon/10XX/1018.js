/**
 * @link https://www.acmicpc.net/problem/1018
 * @since 2021/05/12
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
        const [str, ...strArr] = input;

        const [n, m] = str.split(' ').map(Number);

        const whiteList =[
            'WBWBWBWB',
            'BWBWBWBW',
            'WBWBWBWB',
            'BWBWBWBW',
            'WBWBWBWB',
            'BWBWBWBW',
            'WBWBWBWB',
            'BWBWBWBW',
        ];

        const blackList = [
            'BWBWBWBW',
            'WBWBWBWB',
            'BWBWBWBW',
            'WBWBWBWB',
            'BWBWBWBW',
            'WBWBWBWB',
            'BWBWBWBW',
            'WBWBWBWB',
        ];

        const countArr = [];

        for (let i = 0; i < n - 7; i++) {
            for (let j = 0; j < m - 7; j++) {
                countArr.push(getCount(j, i, strArr, whiteList));
                countArr.push(getCount(j, i, strArr, blackList));
            }
        }

        const min = Math.min(...countArr);

        console.log(min);

        process.exit();
    });

function getCount(x, y, arr, board) {
    let count = 0;

    for(let i = y; i < y + 8; i++) {
        for(let j = x; j < x + 8; j++) {
            if(arr[i][j] !== board[i - y][j - x]) count++;
        }
    }

    return count;
}
