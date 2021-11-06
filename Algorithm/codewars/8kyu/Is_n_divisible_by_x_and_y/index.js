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
         const [n, x, y] = input;
         console.log("\n");
         const result = isDivisible(n, x, y);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const isDivisible = (n, x, y) => {
    return n % x === 0 && n % y === 0;
};