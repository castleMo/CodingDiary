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
         const [arr] = input;
         console.log("\n");
         const result = minimumTotal(arr);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const minimumTotal = (triangle) => {
    const memo = triangle[triangle.length - 1];
    
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            memo[j] = Math.min(memo[j], memo[j + 1]) + triangle[i][j];
        }
    }

    return memo[0];
};