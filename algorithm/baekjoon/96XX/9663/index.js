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

        if([2,3].includes(n)) {
            console.log(0);
            return;
        }

        const row = new Array(n).fill(0);
        let count = 0;

        const check = (x) => {
            for(let i = 0; i < x; i++) {
                if (row[x] === row[i]) {
                    return false;
                } else if (
                    Math.abs(row[x] - row[i]) === x - i
                ) {
                    return false;
                }
            }

            return true;
        }

        const dfs = (x) => {
            if(x === n) {
                count++;
                return;
            }

            for(let i = 0; i < n; i++) {
                if(row[x]) {
                    continue;
                }

                row[x] = i;

                if(check(x)) {
                    dfs(x + 1);
                }

                row[x] = 0;
            }
        }

        
        dfs(0);

        console.log(count);
        process.exit();
    });

