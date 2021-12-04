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
         const [roman] = input;
         console.log("\n");
         const result = solution(roman);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const solution = (roman = '') => {
    const symbol = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    };

    let sum = 0;

    for(let i = 0; i < roman.length; i++) {
        const cur = symbol[roman[i]];
        const next = symbol[roman[i+1]];

        if(next && cur < next) {
            sum += next - cur;
            i++;
        } else {
            sum += cur;
        }
    }

    return sum;
};