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
         const [a, b] = input;
         console.log("\n");
         const result = sumStr(a,b);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const sumStr = (a,b) => {
    if(!a && !b) {
        return "0";
    }
    return String(Number(a) + Number(b));
};