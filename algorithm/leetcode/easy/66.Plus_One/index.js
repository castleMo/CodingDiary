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
         const [digits] = input;
         console.log("\n");
         const result = plusOne(JSON.parse(digits));
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const plusOne = (digits) => {
    let temp = 1;
    for(let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + temp;
        if(sum > 9) {
            temp = 1;
            digits[i] = 0;
        } else {
            break;
        }
    }

    return temp > 0 ? [temp, ...digits] : digits;
};