/**
 * @link https://www.acmicpc.net/problem/2178
 * @name 미로탐색
 */
const readline = require('readline');

const strToNumberArr1 = (str) => str.split(' ').map(Number);
const strToNumberArr2 = (str) => str.split('').map(Number);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const [n, m] = strToNumberArr1(input.shift());

	const result = solution(n, m, input.map(strToNumberArr2));

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n 세로
 * @param {number} m 가로
 * @param {number[][]} maze 미로
 */
function solution(n, m, maze) {
	const check = [...Array(n)].map(() => Array(m).fill(0));

	const queue = [[0, 0]];
	check[0][0] = 1;
	while (queue.length) {
		const [r, c] = queue.shift();

		for (const [i, j] of [
			[0, 1],
			[0, -1],
			[1, 0],
			[-1, 0],
		]) {
			const newR = r + i;
			const newC = c + j;

			if (
				0 <= newR &&
				newR < n &&
				0 <= newC &&
				newC < m &&
				!check[newR][newC] &&
				maze[newR][newC]
			) {
				check[newR][newC] = check[r][c] + 1;
				queue.push([newR, newC]);
			}
		}
	}

	return check[n - 1][m - 1];
}
