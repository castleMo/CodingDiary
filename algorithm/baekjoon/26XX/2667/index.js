/**
 * @link https://www.acmicpc.net/problem/2667
 * @name 단지번호붙이기
 */
const readline = require('readline');

const strToNumberArr = (str) => str.split('').map(Number);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const n = Number(input.shift());

	const result = solution(n, input.map(strToNumberArr));

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number[][]} board
 */
function solution(n, board) {
	let cnt = 0;
	const answer = [];

	const stack = [];
	const visited = [...Array(n)].map(() => Array(n).fill(0));

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[i][j] === 1) {
				stack.push([i, j]);
			}
		}
	}

	const dfs = (r, c, idx) => {
		answer[idx]++;
		visited[r][c] = 1;

		for (const [i, j] of [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		]) {
			const newR = i + r;
			const newC = c + j;
			if (
				0 <= newR &&
				newR < n &&
				0 <= newC &&
				newC < n &&
				!visited[newR][newC] && // 방문하지 않았고
				board[newR][newC] // 집이 있고
			) {
				dfs(newR, newC, idx);
			}
		}
	};

	while (stack.length) {
		const [r, c] = stack.pop();

		if (visited[r][c]) {
			continue;
		}

		answer.push(0);
		cnt++;
		dfs(r, c, answer.length - 1);
	}

	return [cnt, ...answer.sort((a, b) => a - b)];
}
