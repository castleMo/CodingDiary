/**
 * @link https://www.acmicpc.net/problem/11660
 * @name 구간_합_구하기_5
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
	let idx = 0;
	const [n, m] = strToNumberArr(input[idx++]);
	const board = [];
	const nums = [];
	for (let i = 0; i < n; i++) {
		board.push(strToNumberArr(input[idx++]));
	}

	for (let i = 0; i < m; i++) {
		nums.push(strToNumberArr(input[idx++]));
	}

	const result = solution(n, m, board, nums);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number} n 표의 크기
 * @param {number} m 합을 구해야 하는 횟수
 * @param {number[][]} board 표
 * @param {number[][]} nums [x1,y1,x2,y2]
 */
function solution(n, m, board, nums) {
	const ans = [];

	const memo = [...Array(n + 1)].map(() => Array(n + 1).fill(0));

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			memo[i][j] =
				memo[i - 1][j] +
				memo[i][j - 1] +
				board[i - 1][j - 1] -
				memo[i - 1][j - 1];
		}
	}

	for (const [x1, y1, x2, y2] of nums) {
		const sum =
			memo[x2][y2] - memo[x2][y1 - 1] - memo[x1 - 1][y2] + memo[x1 - 1][y1 - 1];
		ans.push(sum);
	}

	return ans;
}
