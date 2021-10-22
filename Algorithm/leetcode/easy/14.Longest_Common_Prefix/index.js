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
         const [strs] = input;
         const result = longestCommonPrefix(JSON.parse(strs));
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    let result = '';
    let index = 0;

    if(strs.length === 1) {
        result = strs[0];
        return result;
    }

    while(true) {
        let word = strs[0][index];
        let flag = false;

        if(!!!word) {
            break;
        }

        if(word === strs[1][index]) {
            for(let i = 1; i < strs.length; i++) {
                if(word !== strs[i][index]) {
                    flag = true;
                }
            }
        } else {
            break;
        }

        if(flag) {
            break;
        }
        index++;
        result += word;
    }

    return result;
};