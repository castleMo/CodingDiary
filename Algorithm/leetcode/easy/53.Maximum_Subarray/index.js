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
         const [nums] = input;
         console.log("\n");
         const result = maxSubArray(JSON.parse(nums));
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const maxSubArray = (nums) => {
    let sum = nums[0];
    let currentSum = 0;

    for(let i = 0; i < nums.length; i++) {
        if(currentSum < 0) {
            currentSum = 0;
        }
        currentSum += nums[i];
        sum = Math.max(sum, currentSum);
    }
    
    return sum;
};