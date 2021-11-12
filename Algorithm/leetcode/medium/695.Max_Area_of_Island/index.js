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
         const result = maxAreaOfIsland(grid);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const maxAreaOfIsland = (grid = []) => {
    let r = 0, // row
        c = 0, // column
        curAreaCnt = 0,
        maxAreaCnt = 0;

        const stack = [];
        const visited = [];


    while(r < grid.length) {
        // 블럭이 1이면
        if(grid[r][c] === 1) {
            stack.push({r, c});
        }

        while(stack.length > 0) {
            const node = stack.pop();
            if(!visited.includes(`${node.r}+${node.c}`)) {
                visited.push(`${node.r}+${node.c}`);
                curAreaCnt++;

                // 동
                const eastNode = 
                    node.c + 1 > -1 && node.c + 1 < grid[node.r].length ? 
                    grid[node.r][node.c + 1] : undefined;

                // 서
                const westNode = 
                    node.c - 1 > -1 && node.c - 1 < grid[node.r].length ? 
                    grid[node.r][node.c - 1] : undefined;

                // 남
                const southNode = 
                    node.r + 1 > -1 && node.r + 1 < grid.length ? 
                    grid[node.r + 1][node.c] : undefined;

                // 북
                const northNode = 
                    node.r - 1 > -1 && node.r - 1 < grid.length ? 
                    grid[node.r - 1][node.c] : undefined;
                
                
                if(eastNode !== undefined && eastNode === 1) {
                    const newNode = {r: node.r , c: node.c + 1};
                    stack.push(newNode);
                }
                
                if(westNode !== undefined && westNode === 1) {
                    const newNode = {r: node.r, c: node.c - 1};
                    stack.push(newNode);
                }
                
                if(southNode !== undefined && southNode === 1) {
                    const newNode = {r: node.r + 1, c: node.c};
                    stack.push(newNode);
                }
                
                if(northNode !== undefined && northNode === 1) {
                    const newNode = {r: node.r - 1, c: node.c};
                    stack.push(newNode);
                }
            }
        }

        if(maxAreaCnt < curAreaCnt) {
            maxAreaCnt = curAreaCnt;
        }
        curAreaCnt = 0;

        c++;
        if(c >= grid[r].length) {
            c = 0;
            r++;
        }
    }

    return maxAreaCnt;
};