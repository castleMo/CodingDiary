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
 
const lengthOfLongestSubstring = (s) => {
    if(s.length < 2) {
        return s.length;
    }

    if(new Set(s).size === 1) {
        return 1;
    }

    let maxStr = '';
    let tempStr = '';

    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        let index = tempStr.indexOf(char);
        
        if(index > -1) {
            if(tempStr.length > maxStr.length) {
                maxStr = tempStr;
            }
            tempStr = tempStr.slice(index + 1) + char;
        } else {
            tempStr += char;
        }
    }

    return (tempStr.length > maxStr.length ? tempStr : maxStr).length;
};
