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
        const c = 15746;

        const memo = {
            1: 1,
            2: 2,
            3: 3,
        }

        for(let i = 4; i <= n; i++) {
            memo[i] = (memo[i - 1] + memo[i - 2]) % c
        }

        console.log(memo[n]);

        process.exit();
    });