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
        const [,...wine] = input;

        if(wine.length < 2) {
            console.log(wine[0]);
            process.exit();    
        } else if (wine.length < 2) {
            console.log(wine[0] + wine[1]);
            process.exit();
        }

        const memo = [
            0,
            wine[0], 
            wine[0] + wine[1]
        ];

        for(let i = 3; i <= wine.length; i++) {
            memo[i] = Math.max(
                memo[i-3] + wine[i-2] + wine[i-1], 
                memo[i-2] + wine[i-1], 
                memo[i-1]
            );
        }

        console.log(memo[wine.length]);

        process.exit();
    });