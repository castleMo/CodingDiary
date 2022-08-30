 const readline = require('readline');

 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 const input = [];
 
 rl.on('line', (line) => {
     input.push(JSON.parse(line));
    })
     .on('close', () => {
         const [r, g, b] = input[0];
         console.log("\n");
         const result = rgb(r, g, b);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const rgb = (r, g, b) => {
    const hexChars = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
    ];

    const toHex = (num) => {
        if(num <= 0) {
            return '00';
        } else if(num >= 255) {
            return 'FF';
        } else {
            return hexChars[Math.floor(num / 16)] + hexChars[Math.floor(num % 16)];
        }
    }

    const bestPracticesToHex = (num) => {
        if(num <= 0) {
            return '00';
        } else if(num >= 255) {
            return 'FF';
        } else {
            return num.toString(16).toUpperCase();
        }
    }

    return toHex(r) + toHex(g) + toHex(b);    
};