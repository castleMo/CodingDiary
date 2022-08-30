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
        const zeros = [];
        const sudoku = input.map((row, rI) => row.split(' ').map((c, cI) => {
            const num = Number(c);
            if(num === 0) {
                zeros.push([rI, cI]);
            }
            return num;
        }));

        const getSquarePoint = (pos) => Math.floor(pos / 3) * 3;

        const check = (r, c) => {
            for (let i = 0; i < 9; i++) {
                if (i === r) {
                    continue;
                }

                if (sudoku[i][c] === 0) {
                    continue;
                }
    
                if (sudoku[i][c] === sudoku[r][c]) {
                    return false;
                }
            }

            for (let i = 0; i < 9; i++) {
                if (i === c) {
                    continue;
                }

                if (sudoku[r][i] === 0) {
                    continue;
                }
    
                if (sudoku[r][i] === sudoku[r][c]) {
                    return false;
                }
            }

            const squareR = getSquarePoint(r);
            const squareC = getSquarePoint(c);

            for(let i = squareR; i < squareR + 3; i++) {
                for(let j = squareC; j < squareC + 3; j++) {
                    if(i === r && j === c) {
                        continue;
                    }

                    if(sudoku[i][j] === 0) {
                        continue;
                    }

                    if(sudoku[i][j] === sudoku[r][c]) {
                        return false;
                    }
                }
            }

            return true;
        }

        const dfs = (cnt) => {
            if(cnt === zeros.length) {
                let result = '';
                sudoku.forEach((v) => {
                    result += v.join(' ') + '\n';
                });
                console.log(result);

                process.exit();
            } else {
                const [r, c] = zeros[cnt];
                
                for(let i = 1; i < 10; i++) {
                    sudoku[r][c] = i;
                    if(check(r, c)) {
                        dfs(cnt + 1);
                    }
                    sudoku[r][c] = 0;
                }
            }
        }

        dfs(0);
    });