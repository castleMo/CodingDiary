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
        const [n, m] = input[0].split(' ').map(Number);

        let result = '';

        const dfs = (cur) => {
            if(cur.length > m) {
                return;
            }

            if(cur.length === m) {
                result += cur.join(' ') + '\n';
                return;
            }

            for(let i = 1 ; i <= n; i++) {
                if(cur.length === 0 || cur[cur.length - 1] <= i) {
                    dfs([...cur, i]);
                }
            }
        }

        dfs([]);

        console.log(result);

        process.exit();
    });