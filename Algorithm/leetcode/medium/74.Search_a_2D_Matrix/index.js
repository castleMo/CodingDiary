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
         const [arr, num] = input;
         const matrix = JSON.parse(arr);
         const target = Number(num);

         console.log("\n");
         const result = searchMatrix(matrix, target);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });

// const searchMatrix = (matrix, target) => {
//     return matrix.flat().indexOf(target) === -1 ? false : true;
// };
 
const searchMatrix = (matrix, target) => {
    for(let i = 0 ; i < matrix.length; i++) {
        const len = matrix[i].length;
        if(matrix[i][0] <= target && target <= matrix[i][len - 1]) {
            let ptr1 = 0;
            let ptr2 = len - 1;

            while(ptr1 <= ptr2) {
                const ptr3 = Math.floor((ptr1 + ptr2) / 2);
                if(matrix[i][ptr3] === target) {
                    return true;
                }

                if(matrix[i][ptr3] < target) {
                    ptr1 = ptr3 + 1;
                } else {
                    ptr2 = ptr3 - 1;
                }                
            }
        }
    }
    
    return false;
};