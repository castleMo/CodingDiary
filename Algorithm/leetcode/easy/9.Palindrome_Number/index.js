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
         const result = isPalindrome(num);
 
         console.log("\n");
         console.log(result);
 
         process.exit();
     });
 
 /**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    if(x < 0) return false;

    const str = Array.from(String(x));
    let loopCnt = 0;
    if(str.length % 2 === 0) {
        loopCnt = str.length / 2;
    } else {
        loopCnt = (str.length / 2) - 1;
    }
    
    for(let i = 0; i <= loopCnt; i++) {
        console.log(str);
        const shift = str.shift();
        const pop = str.pop();
        console.log(`i: ${i}, shift: ${shift}, pop: ${pop}`);
        if(shift !== pop) {
            return false;
        }
    }
    return true;
};

// const isPalindrome = (x) => {
//     if(x < 0) return false;

//     const str = String(x);
    
//     for(let i = 0; i < str.length / 2; i++) {
//         if(str[i] !== str[str.length - i - 1]) return false;
//     }
//     return true;
// };