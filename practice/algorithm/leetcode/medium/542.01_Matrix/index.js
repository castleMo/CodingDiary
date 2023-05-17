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
         const [mat] = input;
         console.log("\n");
         const result = updateMatrix(mat);
 
         console.log("\n");
         console.log({ result });
 
         process.exit();
     });
 
const updateMatrix = (mat) => {
    const max = mat.length * mat[0].length;
    const _mat = JSON.parse(JSON.stringify(mat));

    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                _mat[i][j] = 0;
            } else {
                const upCell = i > 0 ? _mat[i - 1][j] : max;
                const leftCell = j > 0 ? _mat[i][j - 1] : max;
                _mat[i][j] = Math.min(upCell, leftCell) + 1;
            }
        }
    }

    for (let i = mat.length - 1; i >= 0; i--) {
        for (let j = mat[0].length - 1; j >= 0; j--) {
            if (mat[i][j] === 0) {
                _mat[i][j] = 0;
            } else {
                const downCell = i < mat.length - 1 ? _mat[i + 1][j] : max;
                const rightCell = j < mat[0].length - 1 ? _mat[i][j + 1] : max;
                _mat[i][j] = Math.min((Math.min(downCell, rightCell) + 1), _mat[i][j]);
            }
        }
    }
    
    return _mat;
};