/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12914
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
	const [n, r] = input;

	console.log('\n');
	const result = solution(n);

	console.log(result);
	console.log(result === r);

	process.exit();
});

/**
 *
 * @param {number} n
 * @returns
 */
function solution(n) {
	const memo = [0, 1, 2];

	for (let i = 3; i <= n; i++) {
		memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
	}

	return memo[n];
}
