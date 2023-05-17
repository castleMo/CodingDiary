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
         const result = rob(nums);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
// const rob = (nums = []) => {
    // let num1 = 0;
    // let num2 = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     if(i%2===0) {
    //         num1 = Math.max(num1+nums[i], num2);
    //     } else {
    //         num2 = Math.max(num2+nums[i], num1);
    //     }
    // }

    // return Math.max(num1, num2);

//     // for(const n of nums) {
//     //     const temp = num1;
//     //     num1 = Math.max(num1, num2 + n);
//     //     num2 = temp;
//     // }
    
//     // return num1;
// };

let memo;
const rob = (nums) => {
    memo = {};

    if(nums.every((curr) => curr === 0)) {
        return 0;
    }

    return _rob(0, nums);
};

function _rob(i, nums) {
    if (i >= nums.length) {
        return 0;
    }

    if(memo[i]) {
        return memo[i];
    }
    
    const ans = Math.max(_rob(i+1, nums), _rob(i+2, nums) + nums[i]);
    memo[i] = ans;
    return ans
}