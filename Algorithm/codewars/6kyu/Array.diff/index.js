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
         const [a, b] = input;
         console.log("\n");

         const result = arrayDiff(a, b);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });

function arrayDiff(a, b) {
    const result = [];
    const map = {};
    
    for(const num of b) {
        map[num] = num;
    }

    for(const num of a) {
        if(!map[num]) {
            result.push(num);
        }
    }

    return result;
}