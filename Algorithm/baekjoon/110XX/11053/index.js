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
        const [, arr] = input;
        const nums = arr.split(' ').map(Number);

        const memo = new Array(nums.length + 1).fill(1);

        for(let i = 1; i < nums.length; i++) {
            let temp = 0;
            for(let j = 0; j < i; j++) {
                if(nums[j] < nums[i] && temp < memo[j] + 1) {
                    temp = memo[j] + 1;
                }
            }

            if(0 < temp) {
                memo[i] = temp;
            }
        }

        console.log(Math.max(...memo));

        process.exit();
    });