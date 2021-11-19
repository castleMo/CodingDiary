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
         const [n, m] = str.split(' ').map(Number);

        const recursion = (current, nums) => {
            if(current.length === m) {
                console.log(current.join(' '));
                return;
            }

            if(current.length > m) {
                return;
            }

            for(let i = 0; i < nums.length; i++) {
                recursion([...current, nums[i]], nums.filter((v) => v !== nums[i]));
            }
        }

        const numArr = [];

        for(let i = 0; i < n; i++) {
            numArr.push(i+1);
        }

        recursion([], numArr);
 
         process.exit();
     });

