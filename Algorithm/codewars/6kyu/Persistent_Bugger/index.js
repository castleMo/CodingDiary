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
         const [num] = input;
         console.log("\n");
         const result = persistence(num);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const persistence = (num) => {
    let count = 0;
    let str = String(num);

    while(true) {
        if(str < 10) {
            break;
        }
        count++;
        let sum = 1;
        for(let i = 0 ; i < str.length; i++) {
            sum *= str[i];
        }
        str = String(sum);
    }

    return count;
};