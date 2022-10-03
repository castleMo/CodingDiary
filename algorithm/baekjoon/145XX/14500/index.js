/**
 * @link https://www.acmicpc.net/problem/14500
 * @name 테트로미노
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
	const [n, m] = strToNumberArr(input.shift());

	const result = solution(n, m, input.map(strToNumberArr));

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n 세로
 * @param {number} m 가로
 * @param {number[][]} board
 */
function solution(n, m, board) {
	let ans = 0;

	const check = (r, c) => {
		if (0 <= r && r < n && 0 <= c && c < m) {
			return true;
		}

		return false;
	};

	const pos = [
		/**
		 * 일자도형
		 * 1 0 0 0
		 *
		 * 1
		 * 0
		 * 0
		 * 0
		 */
		[
			[0, 0],
			[0, 1],
			[0, 2],
			[0, 3],
		],
		[
			[0, 0],
			[1, 0],
			[2, 0],
			[3, 0],
		],
		/**
		 * 정사각형 도형
		 * 1 0
		 * 0 0
		 */
		[
			[0, 0],
			[0, 1],
			[1, 0],
			[1, 1],
		],
		/**
		 * ㄴ자도형
		 * 1
		 * 0
		 * 0 0
		 *
		 * 1   0
		 * 0 0 0
		 *
		 * 1 0
		 *   0
		 *   0
		 *
		 * 1 0 0
		 * 0
		 *
		 * 1 0
		 *   0
		 * 0 0
		 *
		 * 1
		 * 0 0 0
		 *
		 * 1 0
		 * 0
		 * 0
		 *
		 * 1 0 0
		 *     0
		 */
		[
			[0, 0],
			[1, 0],
			[2, 0],
			[2, 1],
		],
		[
			[0, 2],
			[1, 0],
			[1, 1],
			[1, 2],
		],
		[
			[0, 0],
			[0, 1],
			[1, 1],
			[2, 1],
		],
		[
			[0, 0],
			[0, 1],
			[0, 2],
			[1, 0],
		],
		[
			[0, 1],
			[1, 1],
			[2, 1],
			[2, 0],
		],
		[
			[0, 0],
			[1, 0],
			[1, 1],
			[1, 2],
		],
		[
			[0, 0],
			[0, 1],
			[1, 0],
			[2, 0],
		],
		[
			[0, 0],
			[0, 1],
			[0, 2],
			[1, 2],
		],
		/**
		 * 꼬불모양 도형
		 * 1
		 * 0 0
		 *   0
		 *
		 * 1 0 0
		 * 0 0
		 *
		 * 1 0
		 * 0 0
		 * 0
		 *
		 * 1 0
		 *   0 0
		 */
		[
			[0, 0],
			[1, 0],
			[1, 1],
			[2, 1],
		],
		[
			[0, 1],
			[0, 2],
			[1, 0],
			[1, 1],
		],
		[
			[0, 1],
			[1, 1],
			[1, 0],
			[2, 0],
		],
		[
			[0, 0],
			[0, 1],
			[1, 1],
			[1, 2],
		],
		/**
		 * ㅜ자도형
		 * 1 0 0
		 *   0
		 *
		 * 1
		 * 0 0
		 * 0
		 *
		 * 1 0
		 * 0 0 0
		 *
		 * 1 0
		 * 0 0
		 *   0
		 */
		[
			[0, 0],
			[0, 1],
			[0, 2],
			[1, 1],
		],
		[
			[0, 0],
			[1, 0],
			[1, 1],
			[2, 0],
		],
		[
			[0, 1],
			[1, 0],
			[1, 1],
			[1, 2],
		],
		[
			[0, 1],
			[1, 1],
			[2, 1],
			[1, 0],
		],
	];

	const calc = (r, c) => {
		for (let k = 0; k < pos.length; k++) {
			let sum = 0;

			for (const [i, j] of pos[k]) {
				const newR = r + i;
				const newC = c + j;

				if (!check(newR, newC)) {
					break;
				}

				sum += board[newR][newC];
			}

			ans = Math.max(sum, ans);
		}
	};

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			calc(i, j);
		}
	}

	return ans;
}
