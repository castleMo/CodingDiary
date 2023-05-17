/**
 * @link https://www.acmicpc.net/problem/11726
 */
const readline = require('readline');

const strToNumberArr = (str) => str.split(' ').map(Number);

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
	const memo = [0, 1, 2];
	for (let i = 3; i <= n; i++) {
		memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
	}

	return memo[n];
}
