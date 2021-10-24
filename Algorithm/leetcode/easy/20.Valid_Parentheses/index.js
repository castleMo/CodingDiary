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
         const result = isValid(s);
 
         console.log({ result });
 
         process.exit();
     });
 
/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = (s) => {
    if(s.length < 2) {
        return false;
    }

    if(s.length % 2 !== 0) {
        return false;
    }
    
    if(s.length === 2) {
        return s === "{}" || s === "[]" || s === "()";
    }

    while(
        s.indexOf('()') !== -1 || 
        s.indexOf('{}') !== -1 || 
        s.indexOf('[]') !== -1
    ) {
        s = s.replace("()", "");
        s = s.replace("{}", "");
        s = s.replace("[]", "");
    }

    return s === "";
};

