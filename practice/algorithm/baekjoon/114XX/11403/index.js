/**
 * @link https://www.acmicpc.net/problem/11403
 * @name 경로_찾기
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

	const result = solution(n, input.map(strToNumberArr));

	console.log(result.map((v) => v.join(' ')).join('\n'));

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number[][]} graph
 */
function solution(n, graph) {
	const ans = [...Array(n)].map(() => Array(n).fill(0));

	const map = {};

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (graph[i][j]) {
				map[i] = map[i] ? [...map[i], j] : [j];
			}
		}
	}

	for (let i = 0; i < n; i++) {
		if (map[i]) {
			const queue = [...map[i]];
			const visited = Array(n).fill(false);

			while (queue.length) {
				const j = queue.shift();

				if (visited[j]) {
					continue;
				}

				visited[j] = true;
				ans[i][j] = 1;
				if (map[j]) {
					queue.push(...map[j]);
				}
			}
		}
	}

	return ans;
}

/**
 * 3
 *
 * 0 1 0
 * 0 0 1
 * 1 0 0
 *
 * 0,1
 * 1,2
 * 2,0
 */

/**
 * 7
 *
 * 0 0 0 1 0 0 0
 * 0 0 0 0 0 0 1
 * 0 0 0 0 0 0 0
 * 0 0 0 0 1 1 0
 * 1 0 0 0 0 0 0
 * 0 0 0 0 0 0 1
 * 0 0 1 0 0 0 0
 *
 * 0,3
 * 1,6
 * 3,4
 * 3,5
 * 4,0
 * 5,6
 * 6,2
 */
