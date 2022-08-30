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
        const [text] = input;
        console.log("\n");
        const result = duplicateCount(text);

        console.log("\n");
        console.log({ result });

        process.exit();
    });

const duplicateCount = (text = '') => {
    const map = {};
    const lower = text.toLowerCase();

    for(const char of lower) {
        if(map[char]) {
            map[char] += 1;
        } else {
            map[char] = 1;
        }
    }

    let count = 0;
    const set = new Set(lower);

    set.forEach((char) => {
        if(map[char] > 1) {
            count++;
        }
    });

    return count;
};