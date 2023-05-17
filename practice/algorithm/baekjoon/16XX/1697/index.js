/**
 * @link https://www.acmicpc.net/problem/1697
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
	const [n, k] = strToNumberArr(input[0]);

	const result = solution(n, k);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n 수빈이 위치
 * @param {number} k 동생 위치
 */
function solution(n, k) {
	const size = 100000;
	const visited = Array(size + 1).fill(false);

	const queue = [[n, 0]];

	while (queue.length) {
		const [m, time] = queue.shift();

		if (visited[m]) {
			continue;
		}

		if (m === k) {
			return time;
		}

		[m - 1, m + 1, m * 2].forEach((v) => {
			if (!visited[v] && 0 <= v && v <= size) {
				queue.push([v, time + 1]);
			}
		});

		visited[m] = true;
	}
}
