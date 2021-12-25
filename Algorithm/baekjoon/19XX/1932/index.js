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
        const [[n], ...triangle] = input;

        for (let i = 1; i < n; i++) {
            for (let j = 0; j < triangle[i].length; j++) {
              if (j === 0) {
                triangle[i][j] += triangle[i - 1][j]
              } else if (j === triangle[i].length - 1) {
                triangle[i][j] += triangle[i - 1][j - 1];
              } else {
                triangle[i][j] += Math.max(
                    triangle[i - 1][j - 1], triangle[i - 1][j]
                );
              }
            }
          }

        console.log(Math.max(...triangle[n-1]));

        process.exit();
    });