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
         const [] = input;
         const result = func();
 
         console.log("\n");
         console.log(result);
 
         process.exit();
     });
 
const func = () => {
    
};