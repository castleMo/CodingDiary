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
         const [arr1, m, arr2, n] = input;
         console.log("\n");
         
         const nums1 = JSON.parse(arr1);
         const nums2 = JSON.parse(arr2);

         merge(nums1, Number(m), nums2, Number(n));
         const result = nums1;
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const merge = (nums1, m, nums2, n) => {
    (nums1.filter((v, index) => index < m))
        .concat(nums2)
        .sort((a, b) => a - b)
        .forEach((v, index) => {
        nums1[index] = v;
    });
};