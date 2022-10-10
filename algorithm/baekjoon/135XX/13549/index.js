/**
 * @link https://www.acmicpc.net/problem/13549
 * @name 숨바꼭질_3
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
	const queue = [[n, 0]];
	const visited = Array(100001).fill(false);

	while (queue.length) {
		const [s, c] = queue.shift();

		if (s === k) {
			return c;
		}

		let next = s * 2;

		if (!visited[next] && 0 <= next && next <= 100000) {
			queue.unshift([next, c]);
			visited[next] = true;
		}

		for (next of [s + 1, s - 1]) {
			if (!visited[next] && 0 <= next && next <= 100000) {
				queue.push([next, c + 1]);
				visited[next] = true;
			}
		}
	}
}
