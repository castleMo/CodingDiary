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
         const [arr, k] = input;
         console.log("\n");
         const nums = JSON.parse(arr);
         const result = rotate(nums, Number(k));
 
         console.log("\n");
         console.log(nums);
 
         process.exit();
     });
 
const rotate = (nums = [], k = 0) => {
    k %= nums.length;
    nums.splice(0, 0, ...nums.splice(nums.length - k));
};