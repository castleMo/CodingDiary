/**
 * @link https://www.acmicpc.net/problem/11050
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
	const [n, k] = input[0].split(' ').map(Number);

	const result = solution(n, k);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} N
 * @param {number} K
 */
function solution(N, K) {
	const memo = [0, 1];

	const factorial = (num) => {
		if (num === 0 || num === 1) {
			return 1;
		}

		if (!memo[num]) {
			return (memo[num] = num * factorial(num - 1));
		} else {
			return memo[num];
		}
	};

	return factorial(N) / (factorial(K) * factorial(N - K));
}
