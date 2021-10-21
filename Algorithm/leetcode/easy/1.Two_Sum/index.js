/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

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
         const [target, ...nums] = input;
         const result = twoSum(nums, target);
 
         console.log("\n");
         console.log(result);
 
         process.exit();
     });
 
 function twoSum(nums, target) {
     const obj = {};
     
     for(let i = 0; i < nums.length; i++) {
         const num = target - nums[i];
     
         if (num in obj) {
         return [obj[num], i];
         }
     
         obj[nums[i]] = i;
     }
     
     return null;
 };