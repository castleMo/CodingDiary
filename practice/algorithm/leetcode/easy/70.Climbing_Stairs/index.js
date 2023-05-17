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
         const result = climbStairs(n);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
/*
    0 => 1
    1 => 1
    2 => 2
        1 1
        2
    3 => 3
        1 1 1
        1 2
        2 1
    4 => 5
        1 1 1 1
        1 2 1
        2 1 1
        1 1 2
        2 2
    5 => 8
        1 1 1 1 1
        2 2 1
        1 2 2
        2 1 2
        2 1 1 1
        1 1 1 2
        1 1 2 1
        1 2 1 1
*/

const climbStairs = (n) => {
    let a = 1;
    let b = 1;
    for(let i = 0; i < n; i++) {
        b += a;
        a = b - a;
    }
    return a;
};