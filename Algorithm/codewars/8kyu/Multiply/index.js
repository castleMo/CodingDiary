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
         const [a, b] = input;
         console.log("\n");
         const result = multiply(a, b);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const multiply = (a, b) => {
    return a * b;
};