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
         const [braces] = input;
         console.log("\n");
         const result = validBraces(braces);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const validBraces = (braces = '') => {
    if(braces.length < 2) {
        return false;
    }

    const stack = [];

    for(let i = 0; i < braces.length; i++){
        if (['(','{','['].includes(braces[i])) {
            stack.push(braces[i]);
        } else {
            if(stack.length === 0) {
                return false;
            }
            const lastValue = stack[stack.length-1];
            if( 
                (braces[i] === ']' && lastValue === '[') || 
                (braces[i] === '}' && lastValue === '{') || 
                (braces[i] === ')' && lastValue === '(')
            ) {
                stack.pop();
            } else {
                break;
            }
        }
    }

    return stack.length === 0;
};