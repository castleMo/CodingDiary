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
         const [haystack, needle] = input;
         const result = strStr(haystack, needle);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const strStr = (haystack = "", needle = "") => {
    if(needle === '' || needle === haystack) return 0;
    if (haystack.length < needle.length) return -1;
    
    let i = 0;
    while(i <= haystack.length - needle.length) {
        if(haystack[i] === needle[0]) {
            let word = '';
            for(let j = 0; j < needle.length; j++) {
                word += haystack[i+j];
            }
            console.log({word, needle});
            if(word === needle) {
                break;
            }
        }
        i++;
    }

    if(i > haystack.length - needle.length) {
        return -1;
    }
    
    return i;
};