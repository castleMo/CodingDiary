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
        const nums = input.slice(0, input.length - 1);

        const dp = {
            '20|20|20': 1048576,
        };

        const w = (a,b,c) => {
            const key = `${a}|${b}|${c}`;

            if(dp[key]) {
                return dp[key];
            } else if(a <= 0 || b <= 0 || c <= 0) {
                return 1;
            } else if(a > 20 || b > 20 || c > 20) {
                return dp[`20|20|20`];
            } else if(a < b && b < c) {
                const t1 = w(a, b, c-1);
                const t2 = w(a, b-1, c-1);
                const t3 = w(a, b-1, c);

                const sum = t1 + t2 - t3;

                dp[key] = sum;
                return sum;
            } else {
                const t1 = w(a-1, b, c);
                const t2 = w(a-1, b-1, c);
                const t3 = w(a-1, b, c-1);
                const t4 = w(a-1, b-1, c-1);
                
                const sum = t1 + t2 + t3 - t4;

                dp[key] = sum;
                return sum;
            }
        };

        let answer = '';

        for(const n of nums) {
            const [a, b, c] = n;
            const result = w(a,b,c);
            answer += `w(${a}, ${b}, ${c}) = ${result}\n`;
        }

        console.log(answer);

        process.exit();
    });

