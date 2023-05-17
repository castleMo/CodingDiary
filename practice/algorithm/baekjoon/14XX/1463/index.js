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

        const memo = {
            0: 0,
            1: 0,
        }

        for (let i = 2; i <= n; i++) {
            memo[i] = memo[i - 1] + 1;
            
            if (i % 2 === 0) {
                memo[i] = Math.min(memo[i / 2] + 1, memo[i]);
            }
            if (i % 3 === 0) {
                memo[i] = Math.min(memo[i / 3] + 1, memo[i]);
            }
        }

        console.log(memo[n]);

        process.exit();
    });