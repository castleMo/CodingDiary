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
        const [n] = input;

        const memo = [...new Array(n + 1).keys()].map(() => []);

        memo[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        memo[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];

        for(let i = 3; i <= n; i++) {
            for(let j = 0; j < 10; j++) {
                if (j === 0) {
                    memo[i][j] = memo[i - 1][j + 1] % 1000000000;
                } else if (j === 9) {
                    memo[i][j] = memo[i - 1][j - 1] % 1000000000;
                } else {
                    memo[i][j] = (memo[i - 1][j - 1] + memo[i - 1][j + 1]) % 1000000000;
                }
            }
        }

        const answer = memo[n].reduce((sum, cur) => {
            return sum + cur;
        }, 0);

        console.log(answer % 1000000000);

        process.exit();
    });