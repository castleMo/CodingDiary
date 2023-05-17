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
         const [x] = input;
         console.log("\n");
         const result = mySqrt(x);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const mySqrt = (x) => {
    return Math.floor(Math.sqrt(x));
};