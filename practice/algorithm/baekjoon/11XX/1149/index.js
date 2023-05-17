const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(Number));
})
    .on('close', () => {
        const [[n], ...rgb] = input;

        const dp = [...new Array(n+1)].map(v => [0,0,0]);
        dp[1] = rgb[0];
        for (let i=2; i<=n; i++) {
            dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + rgb[i-1][0];
            dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + rgb[i-1][1];
            dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + rgb[i-1][2];
        }
        console.log(Math.min(...dp[n]));

        process.exit();
    });