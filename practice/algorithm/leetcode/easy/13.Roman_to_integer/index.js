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
         const [str] = input;
         const result = romanToInt(str);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });

const isSubtraction = (char, nextChar) => {
    if(char === 'I' && ['V', 'X'].includes(nextChar)) {
        return true;
    } else if(char === 'X' && ['L', 'C'].includes(nextChar)) {
        return true;
    } else if(char === 'C' && ['D', 'M'].includes(nextChar)) {
        return true;
    } else {
        return false;
    }
}
 
const romanToInt = (s) => {
    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let result = 0;

    for(let i = 0; i < s.length; i++ ) {
        const char = s[i];
        const nextChar = s[i+1];
        
        console.log({char, nextChar});

        if(isSubtraction(char, nextChar)) {
            i++;
            result += obj[nextChar] - obj[char];
        } else {
            result += obj[s[i]];
        }
        // if(char === 'I' && ['V', 'X'].includes(nextChar)) {
        //     i++;
        //     result += obj[nextChar] - obj[char];
        // } else if(char === 'X' && ['L', 'C'].includes(nextChar)) {
        //     i++;
        //     result += obj[nextChar] - obj[char];
        // } else if(char === 'C' && ['D', 'M'].includes(nextChar)) {
        //     i++;
        //     result += obj[nextChar] - obj[char];
        // } else {
        //     result += obj[s[i]];
        // }
    }

    return result;

};