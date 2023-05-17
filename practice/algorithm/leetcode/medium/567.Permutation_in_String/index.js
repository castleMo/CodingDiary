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
         const [s1, s2] = input;
         console.log("\n");
         const result = checkInclusion(s1, s2);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const checkInclusion = (s1 = '', s2 = '') => {
    const map = {}; // Map
    let count = s1.length;
    
    // s1을 map으로 초기화
    for (const char of s1) {
        if (!map[char]) map[char] = 0;
        map[char]++;
    }
    
    let j = 0;
    let i = 0;

    while (i < s2.length) {
        const char = s2[i];
        
        if (map[char]) {
            if (count === s1.length) j = i;
            map[char]--;
            count--;
            if (count === 0) return true;
            i++;
        } else {
            if (count === s1.length) {
                i++;
            } else {
                // 연속되지 않는 단어이기때문에 다시 초기화
                map[s2[j]]++;
                count++;
                j++;
            }
        }
    }
    
    return false;
};