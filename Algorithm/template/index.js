const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(Number(line));
    input.push(line);
    input.push(JSON.parse(line));
})
    .on('close', () => {
        const [] = input;
        console.log("\n");
        const result = func();

        console.log("\n");
        console.log({ result });

        process.exit();
    });

const func = () => {
    
};