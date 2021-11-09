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
         const [s] = input;
         console.log("\n");
         const result = lengthOfLongestSubstring(s);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const lengthOfLongestSubstring = (s = '') => {
    if(s.length < 2) {
        return s.length;
    }

    if(new Set(s).size === 1) {
        return 1;
    }

    let longestStr = '';
    let currentStr = '';

    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        let index = currentStr.indexOf(char);
        
        if(index > -1) {
            if(currentStr.length > longestStr.length) {
                longestStr = currentStr;
            }
            currentStr = currentStr.slice(index + 1) + char;
        } else {
            currentStr += char;
        }
    }

    return (currentStr.length > longestStr.length ? currentStr : longestStr).length;
};
