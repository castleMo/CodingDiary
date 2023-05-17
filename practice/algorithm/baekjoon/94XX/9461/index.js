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
        const [, ...nums] = input;

        const memo = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

        let result = '';

        for(const n of nums) {
            if(n < memo.length) {
                result += memo[n] + '\n';
                continue;
            }

            for(let i = 11; i <= n; i++) {
                memo[i] = memo[i-1] + memo[i-5];
            }
            result += memo[n] + '\n';
        }

        console.log(result);

        process.exit();
    });