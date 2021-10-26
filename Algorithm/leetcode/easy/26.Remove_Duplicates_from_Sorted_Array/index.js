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
         const [arr] = input;
         const result = removeDuplicates(JSON.parse(arr));
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const removeDuplicates = (nums) => {
    const setArr = [...new Set(nums)];
    const count = setArr.length;

    for(let i = 0; i < nums.length; i++) {
        nums[i] = setArr[i];
    }

    console.log(nums);

    return count;
};