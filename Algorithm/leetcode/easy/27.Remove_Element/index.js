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
         const [nums, val] = input;
         const result = removeElement(JSON.parse(nums), Number(val));
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const removeElement = (nums, val) => {
    if(nums.indexOf(val) === -1) return nums.length;
    
    while(true) {
        let i = nums.indexOf(val);
        if(i === -1) {
            break;
        }
        nums.splice(i, 1);
    }

    return nums.length;
};