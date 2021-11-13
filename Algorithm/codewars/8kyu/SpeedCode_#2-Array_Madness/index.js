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
         const [a, b] = input;
         console.log("\n");
         const result = arrayMadness(a, b);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const arrayMadness = (a = [], b = []) => {
    return a.reduce( (sum, cur) => sum + Math.pow(cur, 2), 0) >
        b.reduce( (sum, cur) => sum + Math.pow(cur, 3), 0);
};