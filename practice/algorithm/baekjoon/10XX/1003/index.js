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

        const dp = {};
        const map = {
            0: [1, 0],
            1: [0, 1],
        };

        function fibonacci(n) {
            if (n === 0) {
                return 0;
            } else if (n === 1) {
                return 1;
            } else if (dp[n]) {
                return dp[n];
            } else {
                const num = fibonacci(n - 1) + fibonacci(n - 2);
                dp[n] = num;

                const t1 = map[n-1];
                const t2 = map[n-2];
                map[n] = [t1[0]+t2[0], t1[1]+t2[1]];
                return num;
            }
        }

        let result = '';

        for(const num of nums) {
            fibonacci(num);

            const t = map[num];
            result += `${t[0]} ${t[1]}\n`;
        }

        console.log(result);

        process.exit();
    });

