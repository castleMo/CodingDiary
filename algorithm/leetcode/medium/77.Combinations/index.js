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
         const [str] = input;
         console.log("\n");

         const obj = JSON.parse(str);
         const result = combine(obj.n, obj.k);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const combine = (n, k) => {
    if(k === 1) {
        return [...Array(n).keys()].map(v => [v+1]);
    };

    const result = [];

    dfs(n, k, [], 1, result);

    return result;
};

const dfs = (n, k, current, start, result) => {
    if(current.length == k) {
        result.push(current);
        return;
    }

    if(current.length > k) {
        return;
    }
    
    for(let i = start; i <= n; i++) {
        dfs(n, k, [...current, i], i + 1, result);
    }
}

