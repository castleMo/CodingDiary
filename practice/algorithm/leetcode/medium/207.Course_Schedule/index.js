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
         const [num, arr] = input;
         console.log("\n");
         const result = canFinish(Number(num), JSON.parse(arr));
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const canFinish = (numCourses = 0, prerequisites = [[]]) => {
    const seen = new Set();
    const seeing = new Set();
    const adj = [...Array(numCourses)].map(r => []);

    function dfs(v) {
        if (seen.has(v)) return true;
        if (seeing.has(v)) return false;
        
        seeing.add(v);
        for (let nv of adj[v]) {
            if (!dfs(nv)) {
                return false;
            }
        }
        seeing.delete(v);
        seen.add(v);
        return true;
    }
    
    for (let [u, v] of prerequisites) {
        adj[v].push(u);
    }
    
    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            return false;
        }
    }

    return true;
};

// ! 나중에 다시 확인하자 뭐가뭔지 모르겠다
// TODO
