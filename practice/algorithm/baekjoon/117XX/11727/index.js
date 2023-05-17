/**
 * @link https://www.acmicpc.net/problem/11727
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(Number(line));
}).on('close', () => {
	const [n] = input;

	const result = solution(n);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 */
function solution(n) {
	const memo = [0, 1, 3];

	for (let i = 3; i <= n; i++) {
		memo[i] = memo[i - 1] + memo[i - 2] * 2;
		memo[i] %= 10007;
	}

	return memo[n];
}
