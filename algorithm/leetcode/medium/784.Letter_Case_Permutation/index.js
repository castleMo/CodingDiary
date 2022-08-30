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
         const result = letterCasePermutation(s);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const letterCasePermutation = (s) => {
    const reg = /[a-z]|[A-Z]/g;
    if(!reg.test(s)) {
        return [s];
    }

    const result = [];

    const _letterCasePermutation = (i, current, s) => {
        const curLen = current.length;
        if(curLen === s.length) {
            result.push(current);
            return;
        }
    
        if(isNaN(s[i])) {
            _letterCasePermutation(i + 1, current + s[i].toUpperCase(), s);
            _letterCasePermutation(i + 1, current + s[i].toLowerCase(), s);
        } else {
            _letterCasePermutation(i + 1, current + s[i], s);
        }
    }

    _letterCasePermutation(0, '', s);
    
    return result;
};

