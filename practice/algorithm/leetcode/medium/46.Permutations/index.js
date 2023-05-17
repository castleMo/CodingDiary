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
         const [nums] = input;
         console.log("\n");
         const result = permute(nums);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const permute = (nums = []) => {
    if(nums.length < 2) return [nums];

    const result = [];
    const len = nums.length;

    _permute([], nums, result, len);

    return result;

};

const _permute = (current, nums, result, len) => {
    const curLen = current.length;
    if(curLen === len) {
        result.push(current);
        return;
    }

    if(curLen > len) {
        return;
    }

    for(let i = 0; i < nums.length; i++) {
        _permute([...current, nums[i]], nums.filter((v) => v !== nums[i]), result, len);
    }
}