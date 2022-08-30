 const readline = require('readline');

 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 const input = [];
 
 rl.on('line', (line) => {
    input.push(JSON.parse(line));
 })
     .on('close', () => {
         const [grid] = input;
         console.log("\n");
         const result = orangesRotting(grid);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const orangesRotting = (grid) => {
    const h = grid.length;
    const w = grid[0].length;

    let freshOrange = 0;
    let minute = 0;
    const queue = [];

    for(let i = 0; i < h; i++) {
        for(let j = 0; j < w; j++) {
            if(grid[i][j] === 2) {
                queue.push([i,j]);
            }
            if(grid[i][j] === 1) {
                freshOrange++;
            }
        }
    }

    while(queue.length > 0) {
        const len = queue.length;
        for(let k = 0; k < len; k++) {
            const [i, j] = queue.shift();

            // 동
            if(j + 1 < w && grid[i][j + 1] === 1) {
                grid[i][j + 1] = 2;
                freshOrange--;
                queue.push([i, j + 1]);
            }

            // 서
            if(j - 1 >= 0 && grid[i][j - 1] === 1) {
                grid[i][j - 1] = 2;
                freshOrange--;
                queue.push([i, j - 1]);
            }

            // 남
            if(i + 1 < h && grid[i + 1][j] === 1) {
                grid[i + 1][j] = 2;
                freshOrange--;
                queue.push([i + 1, j]);
            }

            // 북
            if(i - 1 >= 0 && grid[i - 1][j] === 1) {
                grid[i - 1][j] = 2;
                freshOrange--;
                queue.push([i - 1, j]);
            }
        }
        if(queue.length > 0) minute++;
    }

    return freshOrange === 0 ? minute : -1;
};

