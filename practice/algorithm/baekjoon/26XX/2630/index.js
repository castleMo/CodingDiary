/**
 * @link https://www.acmicpc.net/problem/2630
 */
const readline = require('readline');

const strToNumberArr = (str) => str.split(' ').map(Number);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const n = Number(input.shift());
	const board = input.map(strToNumberArr);

	const result = solution(n, board);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number[][]} board
 */
function solution(n, board) {
	const answer = [0, 0]; // [하얀색 칸 수, 파란색 칸 수]

	/**
	 *
	 * @param {number} num
	 * @param {number} r
	 * @param {number} c
	 */
	const isValid = (num, r, c, len) => {
		for (let i = r; i < r + len; i++) {
			for (let j = c; j < c + len; j++) {
				if (num !== board[i][j]) {
					return false;
				}
			}
		}

		return true;
	};

	const stack = [[0, 0, n]];

	while (stack.length) {
		const [r, c, len] = stack.pop();

		const num = board[r][c];
		if (isValid(num, r, c, len)) {
			answer[num]++;
			continue;
		}

		const newLen = len / 2;

		// 0 1
		// 2 3

		// 0
		stack.push([r, c, newLen]);
		// 1
		stack.push([r, c + newLen, newLen]);
		// 2
		stack.push([r + newLen, c, newLen]);
		// 3
		stack.push([r + newLen, c + newLen, newLen]);
	}

	// const recursive = (r, c, len) => {
	// 	const num = board[r][c];
	// 	if (isValid(num, r, c, len)) {
	// 		answer[num]++;
	// 		return;
	// 	}

	// 	const newLen = len / 2;

	// 	// 0 1
	// 	// 2 3

	// 	// 0
	// 	recursive(r, c, newLen);
	// 	// 1
	// 	recursive(r, c + newLen, newLen);
	// 	// 2
	// 	recursive(r + newLen, c, newLen);
	// 	// 3
	// 	recursive(r + newLen, c + newLen, newLen);
	// };

	// recursive(0, 0, n);

	return answer;
}
