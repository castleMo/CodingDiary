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
         const [s] = input;
         console.log("\n");
         const result = lengthOfLastWord(s);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const lengthOfLastWord = (s) => {
    const words = s.trim().split(' ');
    return words[words.length - 1].length;
};