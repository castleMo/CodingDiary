/**
 * @link https://www.acmicpc.net/problem/7576
 * @name 토마토
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
	const [m, n] = strToNumberArr(input.shift());

	const result = solution(m, n, input.map(strToNumberArr));

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} m 상자의 가로 칸 수
 * @param {number} n 상자의 세로 칸 수
 * @param {number[][]} box
 */
function solution(m, n, box) {
	const pos = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	let ans = -1;

	const queue = [];
	let zeroCnt = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (box[i][j] === 0) {
				zeroCnt++;
			} else if (box[i][j] === 1) {
				for (const [r, c] of pos) {
					const newR = r + i;
					const newC = c + j;

					if (
						0 <= newR &&
						newR < n &&
						0 <= newC &&
						newC < m &&
						box[newR][newC] === 0
					) {
						box[i][j] = 2;
						queue.push([newR, newC, 1]);
					}
				}
			}
		}
	}

	if (zeroCnt === 0) {
		return 0;
	}

	let head = 0;
	while (head < queue.length) {
		const [r, c, day] = queue[head++];

		if (box[r][c] === 2) {
			continue;
		}

		zeroCnt--;

		if (zeroCnt === 0) {
			ans = day;
			break;
		}

		box[r][c] = 2;

		for (const [i, j] of pos) {
			const newR = r + i;
			const newC = c + j;

			if (
				0 <= newR &&
				newR < n &&
				0 <= newC &&
				newC < m &&
				box[newR][newC] === 0
			) {
				queue.push([newR, newC, day + 1]);
			}
		}
	}

	return ans;
}
