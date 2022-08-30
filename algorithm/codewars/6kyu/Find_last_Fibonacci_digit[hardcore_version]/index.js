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
         const [n] = input;
         console.log("\n");
         const result = lastFibDigit(n);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });


 
const lastFibDigit = (n) => {
    // if(n < 3) {
    //     return 1;
    // }
    // let sum = 1;
    // let sum2 = 1;
    // const list = [];
    // for(let i = 0; i < n - 1; i++) {
    //     const temp = sum % 10;
    //     sum = (sum + sum2) % 10;
    //     sum2 = temp;
    //     list.push(sum);
    // }
    // return sum2;
    const strList = [
        0, 1, 1, 2, 3, 5, 8, 3,
        1, 4, 5, 9, 4, 3, 7, 0,
        7, 7, 4, 1, 5, 6, 1, 7,
        8, 5, 3, 8, 1, 9, 0, 9,
        9, 8, 7, 5, 2, 7, 9, 6,
        5, 1, 6, 7, 3, 0, 3, 3,
        6, 9, 5, 4, 9, 3, 2, 5,
        7, 2, 9, 1
    ];
    
    return strList[n % 60];
};