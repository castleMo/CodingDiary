const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line.split(" ").map(Number));
})
    .on('close', () => {
        const [[N], ...stats] = input;
        const halfN = N / 2;
        const check = new Array(N).fill(0);

        let min = Infinity;

        function dfs(level, start) {
            if (level === halfN) {
                const sTeam = [];
                const lTeam = [];

                let sSum = 0;
                let lSum = 0;

                for (let i = 0; i < N; i++) {
                    if (check[i]) {
                        sTeam.push(i);
                    } else {
                        lTeam.push(i);
                    }
                }
                for (let i = 0; i < halfN; i++) {
                    for (let j = i + 1; j < halfN; j++) {
                        sSum += stats[sTeam[i]][sTeam[j]] + stats[sTeam[j]][sTeam[i]];
                        lSum += stats[lTeam[i]][lTeam[j]] + stats[lTeam[j]][lTeam[i]];
                    }
                }

                min = Math.min(min, Math.abs(sSum - lSum));

                return;
            }
        
            for (let i = start; i < N; i++) {
                check[i] = 1;
                dfs(level + 1, i + 1);
                check[i] = 0;
            }
        }
        
        dfs(0, 0);

        console.log(min);

        process.exit();
    });