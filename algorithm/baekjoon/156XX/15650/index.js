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
        const [n, m] = input[0].split(' ').map(Number);

        let result = [];

        dfs([], [...Array(n).keys()].map((v) => v+1), m, result);

        console.log(result.join('\n'));

        process.exit();
    });

const dfs = (current, nums, len, result) => {
    if(current.length === len) {
        result.push(current.join(' '));
    }

    if(current.length > len) {
        return;
    }

    for(let i = 0; i < nums.length; i++) {
        dfs([...current, nums[i]], nums.filter((v) => v > nums[i]), len, result);
    }
}