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
         const [nums, target] = input;
         console.log([...JSON.parse(nums)].sort());
         const result = searchInsert(JSON.parse(nums), Number(target));
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const searchInsert = (nums, target) => {
    if(target > nums[nums.length-1]){
        return nums.length
    }
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            index = i;
            break;
        };
        if(nums[i] > target) {
            index = i;
            break;
        }
    }
    return index;
};