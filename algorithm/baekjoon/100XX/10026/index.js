/**
 * @link https://www.acmicpc.net/problem/10026
 * @name 적록색약
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const n = Number(input.shift());

	const result = solution(
		n,
		input.map((v) => v.split('')),
	);

	console.log(result.join(' '));

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {string[]} arr rgb 스트링 배열
 */
function solution(n, arr) {
	const move = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];

	const check = (r, c) => {
		if (r < 0 || n <= r || c < 0 || n <= c) {
			return false;
		}

		return true;
	};

	let visited = [...Array(n)].map(() => Array(n).fill(false));

	const bfs = (i, j) => {
		const queue = [[i, j]];
		const color = arr[i][j];
		visited[0][0] = true;

		while (queue.length) {
			const [r, c] = queue.shift();

			for (const [i, j] of move) {
				const newR = r + i;
				const newC = c + j;
				if (
					check(newR, newC) &&
					color === arr[newR][newC] &&
					!visited[newR][newC]
				) {
					visited[newR][newC] = true;
					queue.push([newR, newC]);
				}
			}
		}
	};

	const normal = () => {
		let cnt = 0;

		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				if (!visited[i][j]) {
					bfs(i, j);
					cnt++;
				}
			}
		}

		return cnt;
	};

	const diff = () => {
		visited = [...Array(n)].map(() => Array(n).fill(false));

		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				if (arr[i][j] === 'G') {
					arr[i][j] = 'R';
				}
			}
		}

		return normal();
	};

	return [normal(), diff()];
}
