 const readline = require('readline');

 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 const input = [];
 
 rl.on('line', (line) => {
     input.push(JSON.parse(line));
    })
     .on('close', () => {
         const [{nums, target}] = input;

         console.log("\n");
         const result = searchRange(nums, target);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const searchRange = (nums = [], target) => {
    const firstIndex = nums.indexOf(target);
    if(firstIndex === -1) {
        return [-1, -1];
    }
    
    let secondIndex = firstIndex + 1;
    if(secondIndex === nums.length) {
        return [firstIndex, firstIndex];
    }
    
    while(true) {
        if(nums[secondIndex] !== target) {
            secondIndex--;
            break;
        }
        secondIndex++;
    }

    return [firstIndex, secondIndex];
};

