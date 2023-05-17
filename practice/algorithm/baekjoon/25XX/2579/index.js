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
        const [n, ...step] = input;

        const memo = {};

        memo[0] = step[0];
        memo[1] = Math.max(step[0] + step[1], step[1]);
        memo[2] = Math.max(step[0] + step[2], step[1] + step[2]);
        
        for(let i = 3; i < n; i++) {
            const n1 = memo[i - 3] + step[i - 1] + step[i];
            const n2 = memo[i - 2] + step[i];
            memo[i] = Math.max(n1, n2);
        }

        console.log(memo[n - 1]);

        process.exit();
    });