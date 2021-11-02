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
         const [a, b] = input;
         console.log("\n");
         const result = addBinary(String(a), String(b));
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const addBinary = (a, b) => {
    let result = '';
    let temp = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    
    while(i >= 0 || j >= 0) {
        let sum = temp;
        if(i >= 0) {
            sum += a[i] - '0';
            i--;
        }

        if(j >= 0) {
            sum += b[j] - '0';
            j--;
        }

        result = sum % 2 + result;

        temp = Number(Math.floor(sum / 2));
    }

    return temp === 1 ? '1' + result : result;
};