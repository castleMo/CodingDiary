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
        const [numCntStr, numsStr, operationsCntStr] = input;

        const nums = numsStr.split(' ').map(Number);
        const operationsCnt = operationsCntStr.split(' ').map(Number);
        const operations = [];

        for(let i = 0; i < 4; i++) {
            const cnt = operationsCnt[i];
            let operation = '';
            switch(i) {
                case 0: 
                    operation = '+';
                    break;
                case 1: 
                    operation = '-';
                    break;
                case 2: 
                    operation = '*';
                    break;
                case 3: 
                    operation = '/';
                    break;
                default: 
                    break;
            }
            [...new Array(cnt).keys()].forEach(() => {
                operations.push(operation);
            });
        }

        let max = -Infinity;
        let min = Infinity;

        const calculator = (cur, num, operation) => {
            let temp = cur;
            
            switch(operation) {
                case '+': 
                    temp += num;
                    break;
                case '-': 
                    temp -= num;
                    break;
                case '*': 
                    temp *= num;
                    break;
                case '/': 
                    if(cur < 0) {
                        temp = -Math.floor(Math.abs(cur) / num);
                    } else {
                        temp = Math.floor(Math.abs(cur) / num);
                    }
                    break;
                default: 
                    break;
            }

            return temp;
        }

        const dfs = (cur, _operations, _nums) => {
            if (_nums.length < 1) {
                if(max < cur) {
                    max = cur;
                }
                if(cur < min) {
                    min = cur;
                }
                return;
            }

            const [num, ...nums] = _nums;
            
            for(let i = 0; i < _operations.length; i++) {
                dfs(
                    calculator(cur, num, _operations[i]), 
                    _operations.filter((o, index) => index !== i), 
                    [].concat(nums),
                );
            }
        }

        const [num, ..._nums] = nums;

        dfs(num, [...operations], [..._nums]);

        console.log(`${max}\n${min}`);

        process.exit();
    });