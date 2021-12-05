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
         const [word, words] = input;
         console.log("\n");
         const result = anagrams(word, JSON.parse(words));
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const anagrams = (word = '', words = ['']) => {
    const result = [];

    const map = {};
    for(const c of word) {
        if(!map[c]) {
            map[c] = 1;
        } else {
            map[c] += 1;
        }
    }

    for(const w of words) {
        const copyMap = JSON.parse(JSON.stringify(map));

        const exceptionChars = [];
        for(const c of w) {
            if(copyMap[c]) {
                copyMap[c] -= 1;
            } else {
                exceptionChars.push(c);
            }
        }

        if(exceptionChars.length !== 0) {
            continue;
        }

        let count = 0;

        const set = new Set(w);
        set.forEach((v) => {
            count += copyMap[v];
        });

        if(count === 0) {
            result.push(w);
        }
    }

    return result;
};